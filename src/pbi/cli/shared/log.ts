import { Console, Data, Effect, Result, Runtime } from "effect";

interface CheckError extends Error {
	readonly _tag: string;
	readonly details?: ReadonlyArray<string>;
	readonly issues?: ReadonlyArray<object>;
}

interface CheckResult<A, E extends CheckError> {
	readonly path: string;
	readonly result: Result.Result<A, E>;
}

class ChecksFailedError extends Data.TaggedError("ChecksFailedError")<{
	readonly failed: number;
}> {
	readonly [Runtime.errorReported] = false;
}

const errorLog = (error: CheckError) =>
	(error.details ?? [error.message]).map((detail) => `[ERROR] ${error._tag}: ${detail}`).join("\n\n");

const errorJson = (error: CheckError) =>
	error.issues === undefined
		? { _tag: error._tag, message: error.message }
		: { _tag: error._tag, issues: error.issues };

const fileJson = <A, E extends CheckError>({ path, result }: CheckResult<A, E>) =>
	Result.isSuccess(result)
		? { path, status: "success" }
		: { path, status: "error", error: errorJson(result.failure) };

const printText = Effect.fnUntraced(function* <A, E extends CheckError>(
	results: ReadonlyArray<CheckResult<A, E>>,
) {
	const passed = results.filter(({ result }) => Result.isSuccess(result));

	yield* Effect.forEach(passed, ({ path }) => Console.log(`[SUCCESS] ${path}`), { discard: true });

	const errors = results.flatMap(({ result }) =>
		Result.isFailure(result) ? [errorLog(result.failure)] : [],
	);

	if (errors.length > 0) yield* Console.error(errors.join("\n\n"));
});

export const logResults = Effect.fnUntraced(function* <A, E extends CheckError>(
	results: ReadonlyArray<CheckResult<A, E>>,
	options: { readonly json: boolean },
) {
	const failed = results.filter(({ result }) => Result.isFailure(result)).length;

	if (options.json) {
		const files = results.map((result) => fileJson(result));

		yield* Console.log(JSON.stringify({ passed: failed === 0, files }, undefined, 2));
	} else {
		yield* printText(results);
	}

	if (failed > 0) yield* new ChecksFailedError({ failed });
});
