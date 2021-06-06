const prettier = require("prettier");

let prettierOptions;

export async function formatHtml(content, outputPath) {
	if (outputPath?.endsWith(".html")) {
		if (!prettierOptions) {
			prettierOptions = await prettier.resolveConfig("test.html", {
				editorconfig: true,
			});
		}

		return prettier.format(content, {
			...prettierOptions,
			parser: "html",
		});
	}

	return content;
}
