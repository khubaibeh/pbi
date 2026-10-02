import { Schema } from "effect";
import { closed } from "../shared.js";

export type BookmarksMetadataSingleBookmarkMetadata = {
  readonly name: string;
};

export const BookmarksMetadataSingleBookmarkMetadata: Schema.Codec<BookmarksMetadataSingleBookmarkMetadata> =
  closed({ name: Schema.String });

export type BookmarksMetadataBookmarkGroupMetadata = {
  readonly name: string;
  readonly displayName: string;
  readonly children: ReadonlyArray<string>;
};

export const BookmarksMetadataBookmarkGroupMetadata: Schema.Codec<BookmarksMetadataBookmarkGroupMetadata> =
  closed({
    name: Schema.String,
    displayName: Schema.String,
    children: Schema.Array(Schema.String),
  });

export const BookmarksMetadataDefinitions = {
  SingleBookmarkMetadata: BookmarksMetadataSingleBookmarkMetadata,
  BookmarkGroupMetadata: BookmarksMetadataBookmarkGroupMetadata,
} as const;

export type BookmarksMetadata = {
  readonly items: ReadonlyArray<
    BookmarksMetadataSingleBookmarkMetadata | BookmarksMetadataBookmarkGroupMetadata
  >;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json";
};

export const BookmarksMetadata: Schema.Codec<BookmarksMetadata> = closed({
  items: Schema.Array(
    Schema.Union([
      Schema.suspend(() => BookmarksMetadataSingleBookmarkMetadata),
      Schema.suspend(() => BookmarksMetadataBookmarkGroupMetadata),
    ]),
  ),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json",
  ),
});

export {
  BookmarksMetadataDefinitions as BookmarksMetadataDefinitionsV1_0_0,
  BookmarksMetadata as BookmarksMetadataV1_0_0,
};
