const { formatHtml } = require("./src/site/transforms/format-html");
const { config } = require("./config");

module.exports = (eleventyConfig) => {
	eleventyConfig.addCollection("post", (collection) => {
		return collection
			.getFilteredByGlob("src/site/pages/posts/*.md")
			.sort((a, b) => {
				return a.inputPath.localeCompare(b.inputPath);
			});
	});

	// eleventyConfig.addTransform("formatHtml", formatHtml);

	eleventyConfig.setUseGitIgnore(false);

	// wait for https://github.com/11ty/eleventy/pull/1429
	// const { createServer: createViteServer } = require("vite");
	// const vite = await createViteServer({
	// 	server: { middlewareMode: "ssr" },
	// });
	// eleventyConfig.setBrowserSyncConfig({
	// 	middleware: [vite.middlewares],
	// });
	eleventyConfig.setBrowserSyncConfig({
		server: null, // override
		proxy: "localhost:3000",
		serveStatic: [
			{
				route: config.pathPrefix.slice(0, -1),
				dir: "dist",
			},
		],
		ui: false,
		ghostMode: false,
	});

	return {
		dir: {
			input: "src/site/pages",
			includes: "../includes",
			layouts: "../layouts",
			data: "../data",
			output: "dist",
		},
		pathPrefix: config.pathPrefix,
	};
};
