const urlFilter = require("@11ty/eleventy/src/Filters/Url");
const slugFilter = require("@11ty/eleventy/src/Filters/Slug");
const getCollectionItemFilter = require("@11ty/eleventy/src/Filters/getCollectionItem");
const { navigation } = require("@11ty/eleventy-navigation");
import config from "../../../../config";
import { EleventyCollection, EleventyPage } from "./types";

// todo: クラ/サバで共有できるようにする

// Eleventy Provided Universal Filters
// https://www.11ty.dev/docs/filters/#eleventy-provided-universal-filters
// https://github.com/11ty/eleventy/blob/master/src/defaultConfig.js

const url = (url: string) => urlFilter(url, config.pathPrefix);

const slug = (str: string) => slugFilter(str);

const getCollectionItem = (
	collection: EleventyCollection,
	page: EleventyPage
) => getCollectionItemFilter(collection, page);

const getPreviousCollectionItem = (
	collection: EleventyCollection,
	page: EleventyPage
) => getCollectionItemFilter(collection, page, -1);

const getNextCollectionItem = (
	collection: EleventyCollection,
	page: EleventyPage
) => getCollectionItemFilter(collection, page, 1);

// eleventy-navigation
// https://www.11ty.dev/docs/plugins/navigation/

const eleventyNavigation = (nodes: EleventyCollection) =>
	navigation.find(nodes);

const eleventyNavigationBreadcrumb = (
	nodes: EleventyCollection,
	activeKey: string
) => navigation.findBreadcrumbs(nodes, activeKey);

export const EleventyFilters = {
	// Eleventy Provided Universal Filters
	url,
	slug,
	getCollectionItem,
	getPreviousCollectionItem,
	getNextCollectionItem,
	// eleventy-navigation
	eleventyNavigation,
	eleventyNavigationBreadcrumb,
};
