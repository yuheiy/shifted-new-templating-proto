declare module "@11ty/eleventy" {
	import pkg from "./package.json";

	interface Config {
		pkg: typeof pkg;
		collectionNames: "all" | "post";
	}
}
