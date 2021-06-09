import pkg from "../../../../package.json";

declare module "@11ty/eleventy" {
	interface Config {
		pkg: typeof pkg;
		collectionNames: "all" | "post";
	}
}
