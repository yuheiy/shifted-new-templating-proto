import { defineConfig } from "vite";
import * as config from "./config";

export default defineConfig({
	base: config.pathPrefix,
	resolve: {
		extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"],
	},
	logLevel: "warn",
	build: {
		rollupOptions: {
			input: "src/main.ts",
		},
		manifest: true,
	},
});
