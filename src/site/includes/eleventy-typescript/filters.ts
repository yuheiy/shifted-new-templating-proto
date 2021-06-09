import { EleventyTemplate, EleventyTemplateData } from "@11ty/eleventy";
import { navigation } from "@11ty/eleventy-navigation";
import getCollectionItemFilter from "@11ty/eleventy/src/Filters/GetCollectionItem";
import slugFilter from "@11ty/eleventy/src/Filters/Slug";
import urlFilter from "@11ty/eleventy/src/Filters/Url";
import { EleventyTypeScriptConfig } from "./config";

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

	// eleventy-navigation
	// https://www.11ty.dev/docs/plugins/navigation/

	eleventyNavigation: navigation.find,

	eleventyNavigationBreadcrumb: navigation.findBreadcrumbs,
};
