import { defineConfig } from "vite-plus";

const ignorePatterns = ["dist", "playground", ".local", "src/pbi/defs"];

export default defineConfig({
	fmt: {
		useTabs: true,
		tabWidth: 2,
		printWidth: 110,
		semi: true,
		singleQuote: false,
		trailingComma: "all",
		arrowParens: "always",
		endOfLine: "lf",
		sortImports: {
			groups: [
				"side_effect",
				"builtin",
				"external",
				["internal", "subpath"],
				["parent", "sibling", "index"],
				"style",
				"unknown",
			],
			internalPattern: ["#/"],
			newlinesBetween: true,
			order: "asc",
			ignoreCase: true,
		},
		ignorePatterns,
	},
	lint: {
		plugins: ["typescript", "unicorn", "oxc", "import", "promise", "node"],
		categories: {
			correctness: "error",
			suspicious: "error",
			perf: "error",
			pedantic: "warn",
		},
		env: {
			es2024: true,
			node: true,
		},
		rules: {
			"max-classes-per-file": "off",
			"typescript/prefer-readonly-parameter-types": "off",
			"vite-plus/prefer-vite-plus-imports": "error",
		},
		ignorePatterns,
		options: {
			typeAware: true,
			typeCheck: true,
		},
		jsPlugins: [
			{
				name: "vite-plus",
				specifier: "vite-plus/oxlint-plugin",
			},
		],
	},
	staged: {
		"*.{ts,mts,cts,js,mjs,cjs}": "vp check --fix",
		"*.json": "vp fmt",
	},
});
