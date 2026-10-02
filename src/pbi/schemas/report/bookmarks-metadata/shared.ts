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
