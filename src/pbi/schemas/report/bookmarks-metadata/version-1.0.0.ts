import { Schema } from "effect";
import { closed } from "../shared.js";

export type SingleBookmarkMetadata = {
  readonly name: string;
};

export const SingleBookmarkMetadata: Schema.Codec<SingleBookmarkMetadata> =
  closed({ name: Schema.String });

export type BookmarkGroupMetadata = {
  readonly name: string;
  readonly displayName: string;
  readonly children: ReadonlyArray<string>;
};

export const BookmarkGroupMetadata: Schema.Codec<BookmarkGroupMetadata> =
  closed({
    name: Schema.String,
    displayName: Schema.String,
    children: Schema.Array(Schema.String),
  });

export type BookmarksMetadata = {
  readonly items: ReadonlyArray<SingleBookmarkMetadata | BookmarkGroupMetadata>;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json";
};

export const BookmarksMetadata: Schema.Codec<BookmarksMetadata> = closed({
  items: Schema.Array(
    Schema.Union([
      Schema.suspend(() => SingleBookmarkMetadata),
      Schema.suspend(() => BookmarkGroupMetadata),
    ]),
  ),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json",
  ),
});

export const BookmarksMetadataDefinitionsV1_0_0 = {
  SingleBookmarkMetadata: SingleBookmarkMetadata,
  BookmarkGroupMetadata: BookmarkGroupMetadata,
} as const;

export {
  SingleBookmarkMetadata as BookmarksMetadataSingleBookmarkMetadataV1_0_0,
  BookmarkGroupMetadata as BookmarksMetadataBookmarkGroupMetadataV1_0_0,
  BookmarksMetadata as BookmarksMetadataV1_0_0,
};
