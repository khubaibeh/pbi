import { Effect, Schema } from "effect";
import { FileSystem } from "effect/FileSystem";
import { Path } from "effect/Path";

const Props = Schema.Struct({
	artifacts: Schema.NonEmptyArray(
		Schema.Struct({
			report: Schema.Struct({ path: Schema.NonEmptyString }),
		}),
	),
});

const PropsFromJson = Schema.fromJsonString(Props);

export type Artifacts = {
	report: string;
	semanticModel: string | null;
};

class FileNotFoundError extends Schema.TaggedError<FileNotFoundError>()(
	"FileNotFoundError",
	{},
) {}

class ArtifactsNotFoundError extends Schema.TaggedError<ArtifactsNotFoundError>()(
	"ArtifactsNotFoundError",
	{},
) {}

/**
 * Resolves the report artifacts directory from a PBIP project directory.
 * I feel like we should instead give a better resolution in here.
 * */
export const resolveArtifactsDir = (dir: string) =>
	Effect.gen(function* () {
		const fs = yield* FileSystem;
		const path = yield* Path;

		const root = path.resolve(dir);

		const file = (yield* fs.readDirectory(root)).find((name) =>
			name.endsWith(".pbip"),
		);

		if (file === undefined) return yield* new FileNotFoundError();

		const contents = yield* fs.readFileString(path.join(root, file));

		const properties =
			yield* Schema.decodeUnknownEffect(PropsFromJson)(contents);

		// TODO: What happens if we have more than one artifacts path?
		const report = properties.artifacts[0].report.path;

		const resolved = path.resolve(root, report);
		if (!(yield* fs.exists(resolved)))
			return yield* new ArtifactsNotFoundError();

		const resolvedDir = yield* fs.readDirectory(resolved);
		if (resolvedDir.length === 0) return yield* new ArtifactsNotFoundError();

		return resolved;
	});
