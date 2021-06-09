const prettier = require("prettier");

let prettierOptions;

async function formatHtml(content, outputPath) {
	if (outputPath?.endsWith(".html")) {
		if (prettierOptions === undefined) {
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

exports.formatHtml = formatHtml;
