import { defineConfig } from "vite";
import { config } from "./config";

export default defineConfig({
	base: config.pathPrefix,
	logLevel: "warn",
	build: {
		rollupOptions: {
			input: "src/main.ts",
		},
		manifest: true,
	},
});
