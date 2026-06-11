import { Data, Effect, Schema } from "effect";

const API_URL = "https://api.daxformatter.com/api/daxtextformat";
const CONCURRENCY = 5;

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
      catch: (e) => new JSONError({ input: input }),
    });

    let decoded = yield* Schema.decode(schema)(data).pipe(
      Effect.mapError((e) => new JSONError({ input: input })),
    );

    if (decoded.errors.length > 0) {
      return input;
    }

    return decoded.formatted;
  }).pipe(Effect.catchTag("JSONError", (e) => Effect.succeed(e.input)));

export const formatMany = Effect.fn("formatMany")(function* (
  input: string[],
  options?: { concurrency: number },
) {
  const concurrency = options ? options.concurrency : CONCURRENCY;

  const formatted = yield* Effect.all(
    input
      .map((val) => format(val))
      .map((f) => f.pipe(Effect.catchAll((e) => Effect.succeed(e.input)))),
    {
      concurrency: concurrency,
    },
  );

  return formatted;
});
