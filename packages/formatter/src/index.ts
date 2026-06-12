import { Effect } from "effect";
import { formatMany } from "./effect";

export const format = (
  input: string[],
  options?: { concurrency: number; retries: number },
) => Effect.runPromise(formatMany(input, options));
