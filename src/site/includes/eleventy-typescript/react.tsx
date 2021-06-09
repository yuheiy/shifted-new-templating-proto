import React from "react";
import ReactDOMServer from "react-dom/server";
import { EleventyCommonData } from "./types";

export function defineTemplate<
	U extends {
		[key: string]: any;
	},
	T extends {
		// https://www.11ty.dev/docs/collections/
		tags?: string[];
		eleventyExcludeFromCollections?: boolean;
		// https://www.11ty.dev/docs/pagination/
		pagination?: {
			data: string;
			size: number;
			alias?: string;
			resolve?: "value";
			filter?: string[];
			reverse?: boolean;
			addAllPagesToCollections?: boolean;
			before?: <T = any>(data: T[]) => T[];
		};
		// https://www.11ty.dev/docs/dates/
		date?: "Last Modified" | "Created" | string;
		// https://www.11ty.dev/docs/permalinks/
		permalink?: string | ((data: E) => string) | boolean;
		// https://www.11ty.dev/docs/plugins/navigation/
		eleventyNavigation?: {
			key: string;
			parent?: string;
			title?: string;
			order?: number;
			url?: string;
			excerpt?: string;
		};
	} & {
		[key: string]: any;
	} = unknown,
	// https://www.11ty.dev/docs/data-cascade/
	E = EleventyCommonData & T & U
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
