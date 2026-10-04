import { ByteSize, Data, Effect, FileSystem, Predicate } from "effect";
import type { PlatformError } from "effect/PlatformError";

class FileNotFoundError extends Data.TaggedError("FileNotFoundError")<{
	readonly path: string;
}> {
	override get message() {
		return this.path;
	}
}

class FileAccessDeniedError extends Data.TaggedError("FileAccessDeniedError")<{
	readonly path: string;
}> {
	override get message() {
		return this.path;
	}
}

class NotAFileError extends Data.TaggedError("NotAFileError")<{
	readonly path: string;
	readonly fileType: FileSystem.File.Type;
}> {
	override get message() {
		return `${this.path} (${this.fileType})`;
	}
}

class EmptyFileError extends Data.TaggedError("EmptyFileError")<{
	readonly path: string;
}> {
	override get message() {
		return this.path;
	}
}

class FileReadFailedError extends Data.TaggedError("FileReadFailedError")<{
	readonly path: string;
	readonly cause: PlatformError;
}> {
	override get message() {
		return `(${this.path}) Could not access or read the file (${this.cause.message})`;
	}
}

const fileAccessError = (
	path: string,
	cause: PlatformError,
): FileNotFoundError | FileAccessDeniedError | FileReadFailedError => {
	if (Predicate.isTagged(cause.reason, "NotFound")) return new FileNotFoundError({ path });

	if (Predicate.isTagged(cause.reason, "PermissionDenied")) return new FileAccessDeniedError({ path });

	return new FileReadFailedError({ path, cause });
};

export const readFile = Effect.fn("cli.shared.readFile")(function* (path: string) {
	const fs = yield* FileSystem.FileSystem;

	const mapError = Effect.mapError((cause: PlatformError) => fileAccessError(path, cause));

	const info = yield* fs.stat(path).pipe(mapError);

	if (info.type !== "File") return yield* new NotAFileError({ path, fileType: info.type });

	if (ByteSize.isZero(info.size)) return yield* new EmptyFileError({ path });

	const text = yield* fs.readFileString(path).pipe(mapError);

	if (text.trim().length === 0) return yield* new EmptyFileError({ path });

	return text;
});

export const checkFiles = Effect.fn("cli.shared.checkFiles")(function* <A, E, R>(
	files: ReadonlyArray<string>,
	check: (text: string, file: string) => Effect.Effect<A, E, R>,
) {
	return yield* Effect.forEach(files, (file) =>
		readFile(file).pipe(
			Effect.flatMap((text) => check(text, file)),
			Effect.result,
			Effect.map((result) => ({ path: file, result })),
		),
	);
});
