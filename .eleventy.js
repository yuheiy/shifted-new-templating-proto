const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const prettier = require("prettier");
const config = require("./config").default;

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addCollection("posts", (collection) => {
		return collection.getFilteredByGlob("src/site/posts/*.md").sort((a, b) => {
			return a.inputPath.localeCompare(b.inputPath);
		});
	});

	eleventyConfig.addTransform("formatHtml", async (content, outputPath) => {
		if (outputPath?.endsWith(".html")) {
			const options = await prettier.resolveConfig("test.html", {
				editorconfig: true,
			});
			return prettier.format(content, {
				...options,
				parser: "html",
			});
		}

		return content;
	});

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
			input: "src/site",
			layouts: "_layouts",
			output: "dist",
		},
		pathPrefix: config.pathPrefix,
	};
};
