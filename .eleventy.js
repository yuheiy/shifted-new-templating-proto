const { formatHtml } = require("./src/site/_transforms/format-html");
const config = require("./config").default;

module.exports = (eleventyConfig) => {
	eleventyConfig.addCollection("posts", (collection) => {
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
			includes: "../_includes",
			layouts: "../_layouts",
			data: "../_data",
			output: "dist",
		},
		pathPrefix: config.pathPrefix,
	};
};
