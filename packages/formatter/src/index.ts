import { Effect } from "effect";
import { formatMany, type Options } from "./effect";

export const format = (input: string[], options?: Options) =>
  Effect.runPromise(Effect.scoped(formatMany(input, options)));
