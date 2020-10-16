import pkg from "./package.json"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"

const extensions = [".js", ".ts"]

export default [
	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: "index.ts",
		output: [
			{
				file: pkg.main,
				format: "cjs",
			},
			{
				file: pkg.module,
				format: "es",
			},
		],
		plugins: [
			resolve({
				extensions, //specifies the extensions of files that the plugin will operate on
			}),
			babel({
				exclude: "node_modules/**",
				extensions,
			}),
		],
	},
]
