import { resolveArtifactsDir } from "$pbi/core/artifacts.js";

import { NodeServices } from "@effect/platform-node";
import { Effect } from "effect";
import { strict as assert } from "node:assert";
import { test } from "node:test";

test("resolves the report artifacts directory from a PBIP project", async () => {
	const projectDir = new URL("../data/TestReport1/", import.meta.url).pathname;

	const program = Effect.gen(function* () {
		const resolved = yield* resolveArtifactsDir(projectDir);

		assert.equal(resolved, `${projectDir}TestReport1.Report`);
	}).pipe(Effect.provide(NodeServices.layer));

	await Effect.runPromise(program);
});
