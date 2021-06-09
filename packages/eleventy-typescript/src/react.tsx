import {
	EleventySuppliedData,
	EleventyTemplateInputData,
} from "@11ty/eleventy";
import React from "react";
import ReactDOMServer from "react-dom/server";

export function defineTemplate<
	CascadedData extends {
		[key: string]: any;
	},
	TemplateData extends EleventyTemplateInputData = unknown,
	// https://www.11ty.dev/docs/data-cascade/
	EleventyData = EleventySuppliedData & TemplateData & CascadedData
>(
	templateData: TemplateData,
	render: (eleventyData: EleventyData) => React.ReactElement
) {
	return {
		data: templateData,
		render: (eleventyData: EleventyData) => renderToHTML(render(eleventyData)),
	};
}

function renderToHTML(element: React.ReactElement) {
	const rendered = ReactDOMServer.renderToStaticMarkup(
		<React.StrictMode>{element}</React.StrictMode>
	);
	return "<!DOCTYPE html>" + rendered;
}
