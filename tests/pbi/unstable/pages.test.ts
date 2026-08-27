import { strict as assert } from "node:assert";
import { test } from "node:test";
import { Effect } from "effect";
import { NodeServices } from "@effect/platform-node";
import { listPages } from "$pbi/unstable/pages.js";

const projectDir = new URL(
	"../../data/TestReport1/TestReport1.Report/",
	import.meta.url,
).pathname;

test("lists pages from a report artifacts directory", async () => {
	const pages = await Effect.runPromise(
		listPages(projectDir).pipe(Effect.provide(NodeServices.layer)),
	);

	assert.deepEqual(
		pages.map((page) => page.customName),
		["Summary <Summary page>", "Overview <Overview page>"],
	);
});
