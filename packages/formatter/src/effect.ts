import { Data, Effect, Schema, Schedule } from "effect";
import { RateLimiter } from "effect/unstable/persistence";

const API_URL = "https://api.daxformatter.com/api/daxtextformat";
const CONCURRENCY = 5;
const RETRIES = 3;
const RATE_LIMIT = 5; // 5 per second

export class HTTPError extends Data.TaggedError("HTTPError")<{
	status: number;
	input: string;
}> {}

export class NetworkError extends Data.TaggedError("NetworkError")<{
	reason: unknown;
	input: string;
}> {}

export class JSONError extends Data.TaggedError("JSONError")<{
	input: string;
}> {}

const schema = Schema.Struct({
	formatted: Schema.String,
	errors: Schema.Array(Schema.String),
});

const format = (input: string) =>
	Effect.gen(function* () {
		if (input.length === 0) {
			return input;
		}

		let payload = { dax: input };

		let res = yield* Effect.tryPromise({
			try: (signal) =>
				fetch(API_URL, {
					method: "POST",
					body: JSON.stringify(payload),
					headers: { "Content-Type": "application/json" },
					signal,
				}),
			catch: (e) => new NetworkError({ reason: e, input: input }),
		});

		if (!res.ok) {
			return yield* Effect.fail(
				new HTTPError({ status: res.status, input: input }),
			);
		}

		let data = yield* Effect.tryPromise({
			try: () => res.json(),
			catch: () => new JSONError({ input: input }),
		});

		let decoded = yield* Schema.decodeUnknownEffect(schema)(data).pipe(
			Effect.mapError(() => new JSONError({ input: input })),
		);

		if (decoded.errors.length > 0) {
			return input;
		}

		return decoded.formatted;
	}).pipe(Effect.catchTag("JSONError", (e) => Effect.succeed(e.input)));

export type Options = {
	concurrency: number;
	rateLimit: number;
	retries: number;
};

export const formatMany = Effect.fn("formatMany")(function* (
	input: string[],
	options?: Options,
) {
	const retries = options?.retries ?? RETRIES;
	const concurrency = options?.concurrency ?? CONCURRENCY;
	const limit = options?.rateLimit ?? RATE_LIMIT;

	const rateLimiter = yield* RateLimiter.make.pipe(
		Effect.provide(RateLimiter.layerStoreMemory),
	);
	const rateLimit = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
		rateLimiter
			.consume({
				key: "daxformatter",
				limit,
				onExceeded: "delay",
				window: "1 second",
			})
			.pipe(Effect.flatMap(({ delay }) => Effect.delay(effect, delay)));

	const mapped = new Map<string, string>();
	input.forEach((val) => {
		const trimmed = val.trim();
		if (trimmed.length > 0) {
			mapped.set(trimmed, trimmed);
		}
	});

	yield* Effect.all(
		[...mapped.keys()].map((val) =>
			rateLimit(format(val)).pipe(
				Effect.retry({
					schedule: Schedule.recurs(retries),
					while: (error) =>
						error._tag === "HTTPError" || error._tag === "NetworkError",
				}),
				Effect.catch(() => Effect.succeed(val)),
				Effect.map((v) => (mapped.set(val, v), v)),
			),
		),
		{
			concurrency: concurrency,
		},
	);

	return input.map((val) => mapped.get(val.trim()) ?? val);
});
