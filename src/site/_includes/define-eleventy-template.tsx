import React from "react";
import ReactDOMServer from "react-dom/server";
import { Merge } from "type-fest";
import { EleventyCommonData } from "./eleventy-types";

export function defineEleventyTemplate<
	U extends {
		[key: string]: any;
	},
	T extends {
		[key: string]: any;
	} = unknown,
	// https://www.11ty.dev/docs/data-cascade/
	E = Merge<EleventyCommonData, T> &
		U & {
			[key: string]: any;
		}
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
