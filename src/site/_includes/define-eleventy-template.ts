import React from "react";
import ReactDOMServer from "react-dom/server";
import { Merge } from "type-fest";
import { EleventyCommonData } from "./eleventy-types";

// todo: templateDataにobject以外を渡せないようにする

export function defineEleventyTemplate<
	U extends {
		[key: string]: any;
	},
	T = unknown,
	// https://www.11ty.dev/docs/data-cascade/
	E = Merge<EleventyCommonData, T> &
		U & {
			[key: string]: any;
		}
>(templateData: T, render: (eleventyData: E) => React.ReactElement) {
	return {
		data: templateData,
		render: (eleventyData: E) => renderReact(render(eleventyData)),
	};
}

function renderReact(element: React.ReactElement) {
	const rendered = ReactDOMServer.renderToStaticMarkup(element);
	return "<!doctype html>" + rendered;
}
