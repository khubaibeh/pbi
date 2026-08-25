import { Console, Effect } from "effect";

const fn = Effect.gen(function* () {
	yield* Console.log("Hello World");
});

Effect.runSync(fn);
