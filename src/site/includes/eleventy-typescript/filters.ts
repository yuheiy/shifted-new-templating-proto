import { EleventyTemplate, EleventyTemplateData } from "@11ty/eleventy";
import getCollectionItemFilter from "@11ty/eleventy/src/Filters/GetCollectionItem";
import slugFilter from "@11ty/eleventy/src/Filters/Slug";
import { EleventyTypeScriptConfig } from "./config";
import urlFilter from "./url-filter";

export const EleventyFilters = {
	// Eleventy Provided Universal Filters
	// https://www.11ty.dev/docs/filters/#eleventy-provided-universal-filters
	// https://github.com/11ty/eleventy/blob/master/src/defaultConfig.js

	url: (url: string) => urlFilter(url, EleventyTypeScriptConfig.pathPrefix),

	slug: slugFilter,

	getCollectionItem: (
		collection: EleventyTemplate[],
		page: EleventyTemplateData
	) => getCollectionItemFilter(collection, page),

	getPreviousCollectionItem: (
		collection: EleventyTemplate[],
		page: EleventyTemplateData
	) => getCollectionItemFilter(collection, page, -1),

	getNextCollectionItem: (
		collection: EleventyTemplate[],
		page: EleventyTemplateData
	) => getCollectionItemFilter(collection, page, 1),
};
