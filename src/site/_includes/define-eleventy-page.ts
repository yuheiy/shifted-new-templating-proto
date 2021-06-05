import React from "react";
import { Merge } from "type-fest";
import pkg from "../../../package.json";

// manual update
export type EleventyCollectionNames = "all" | "posts";
export type EleventyGlobalDataNames = "env" | "manifest" | "metadata";

// https://www.11ty.dev/docs/data-eleventy-supplied/
export type EleventySuppliedData = {
	pkg: typeof pkg;
	// https://www.11ty.dev/docs/pagination/
	pagination?: {
		// todo
	};
	collections: Record<
		EleventyCollectionNames,
		// https://www.11ty.dev/docs/collections/#collection-item-data-structure
		{
			inputPath: string;
			fileSlug: string;
			filePathStem: string;
			outputPath: string;
			url: string;
			date: Date;
			data: {
				[key: string]: any;
			};
			templateContent: string;
		}[]
	>;
	page: {
		url: string;
		fileSlug: string;
		filePathStem: string;
		date: Date;
		inputPath: string;
		outputPath: string;
	};
};

// https://www.11ty.dev/docs/data-global/
export type EleventyGlobalData = Record<
	EleventyGlobalDataNames,
	{ [key: string]: any }
>;

const defaultTemplateData = {
	layout: "react",
};

export function defineEleventyPage<
	U,
	T = Merge<typeof defaultTemplateData, U>,
	// https://www.11ty.dev/docs/data-cascade/
	E = Merge<EleventySuppliedData & EleventyGlobalData, T> & {
		[key: string]: any;
	}
>(userData: U, render: (eleventyData: E) => React.ReactNode) {
	const templateData = {
		...defaultTemplateData,
		...userData,
	};

	return {
		data: templateData,
		render,
	};
}
