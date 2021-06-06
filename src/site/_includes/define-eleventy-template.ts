import React from "react";
import ReactDOMServer from "react-dom/server";
import { Merge } from "type-fest";
import { EleventyCommonData } from "./eleventy-types";

export function defineEleventyTemplate<
	U,
	T = U,
	// https://www.11ty.dev/docs/data-cascade/
	E = Merge<EleventyCommonData, T> & {
		[key: string]: any;
	}
>(userData: U, render: (eleventyData: E) => React.ReactElement) {
	return {
		data: userData,
		render: (eleventyData: E) => renderReact(render(eleventyData)),
	};
}

function renderReact(element: React.ReactElement) {
	const rendered = ReactDOMServer.renderToStaticMarkup(element);
	return "<!doctype html>" + rendered;
}
