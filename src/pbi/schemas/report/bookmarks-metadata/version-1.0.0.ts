import { Schema } from "effect";

import { BookmarkGroupMetadata, SingleBookmarkMetadata } from "./shared.js";
import { closed } from "../shared.js";

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
} from "./shared.js";

export { BookmarksMetadata as BookmarksMetadataV1_0_0 };
