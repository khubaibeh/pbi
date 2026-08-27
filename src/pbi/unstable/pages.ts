import { Console, Effect, Schema } from "effect";
import { FileSystem } from "effect/FileSystem";
import { Path } from "effect/Path";

/** The required and optional top-level fields in a PBIR page definition. */
const PageBinding = Schema.Struct({
	name: Schema.String,
	type: Schema.String,
	referenceScope: Schema.optionalKey(Schema.String),
	parameters: Schema.optionalKey(Schema.Array(Schema.Json)),
	acceptsFilterContext: Schema.optionalKey(Schema.String),
});

const VisualInteraction = Schema.Struct({
	source: Schema.String,
	target: Schema.String,
	type: Schema.String,
});

const Annotation = Schema.Struct({
	name: Schema.String,
	value: Schema.String,
});

const AutoPageGenerationConfig = Schema.Struct({
	selectedFields: Schema.Array(Schema.Json),
	visualContainerConfigurations: Schema.Array(Schema.Json),
	layout: Schema.optionalKey(Schema.Json),
});

export class Page extends Schema.Class<Page>("Page")({
	$schema: Schema.String,
	name: Schema.String,
	displayName: Schema.String,
	displayOption: Schema.String,
	height: Schema.optionalKey(Schema.Json),
	width: Schema.optionalKey(Schema.Json),
	filterConfig: Schema.optionalKey(Schema.Json),
	pageBinding: Schema.optionalKey(PageBinding),
	objects: Schema.optionalKey(Schema.Json),
	type: Schema.optionalKey(Schema.Json),
	visibility: Schema.optionalKey(Schema.Json),
	visualInteractions: Schema.optionalKey(Schema.Array(VisualInteraction)),
	autoPageGenerationConfig: Schema.optionalKey(AutoPageGenerationConfig),
	annotations: Schema.optionalKey(Schema.Array(Annotation)),
	howCreated: Schema.optionalKey(Schema.Json),
}) {
	get customName() {
		return `${this.name} <${this.displayName}>`;
	}
}

const PageFromJson = Schema.fromJsonString(Page);
const PagesMetadataFromJson = Schema.fromJsonString(
	Schema.Struct({
		$schema: Schema.String,
		pageOrder: Schema.optionalKey(Schema.Array(Schema.String)),
	}),
);

export const parsePage = (contents: string) =>
	Effect.gen(function* () {
		return yield* Schema.decodeUnknownEffect(PageFromJson)(contents, {
			onExcessProperty: "preserve",
		});
	});

export const listPages = (root: string) =>
	Effect.gen(function* () {
		const fs = yield* FileSystem;
		const path = yield* Path;
		const pagesRoot = path.join(path.resolve(root), "definition", "pages");
		const directories = yield* fs.readDirectory(pagesRoot);
		const metadata = yield* fs
			.readFileString(path.join(pagesRoot, "pages.json"))
			.pipe(
				Effect.flatMap((contents) =>
					Schema.decodeUnknownEffect(PagesMetadataFromJson)(contents),
				),
			);
		const pageOrder =
			metadata.pageOrder ??
			directories.filter((directory) => directory !== "pages.json");
		const pages = yield* Effect.forEach(pageOrder, (directory) =>
			fs
				.readFileString(path.join(pagesRoot, directory, "page.json"))
				.pipe(Effect.flatMap(parsePage)),
		);

		return pages;
	});

export const printPageNames = (pages: ReadonlyArray<Page>) =>
	Effect.forEach(pages, (page) => Console.log(page.customName), {
		discard: true,
	});
