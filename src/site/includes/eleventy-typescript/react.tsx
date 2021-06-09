import {
	EleventySuppliedData,
	EleventyTemplateInputData,
} from "@11ty/eleventy";
import React from "react";
import ReactDOMServer from "react-dom/server";

export function defineTemplate<
	U extends {
		[key: string]: any;
	},
	T extends EleventyTemplateInputData = unknown,
	// https://www.11ty.dev/docs/data-cascade/
	E = EleventySuppliedData & T & U
>(templateData: T, render: (eleventyData: E) => React.ReactElement) {
	return {
		data: templateData,
		render: (eleventyData: E) => renderToHTML(render(eleventyData)),
	};
}

function renderToHTML(element: React.ReactElement) {
	const rendered = ReactDOMServer.renderToStaticMarkup(
		<React.StrictMode>{element}</React.StrictMode>
	);
	return "<!DOCTYPE html>" + rendered;
}
