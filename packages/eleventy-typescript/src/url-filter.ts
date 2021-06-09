// Since `path` module do not work in browser, so let we create a fork version of:
// https://github.com/11ty/eleventy/blob/master/src/Filters/Url.js

import path from "path-browserify";
import validUrl from "valid-url";

export default function (url: string, pathPrefix: string) {
	// work with undefined
	url = url || "";

	if (
		validUrl.isUri(url) ||
		url.indexOf("http://") === 0 ||
		url.indexOf("https://") === 0
	) {
		return url;
	}

	if (pathPrefix === undefined || typeof pathPrefix !== "string") {
		// When you retrieve this with config.getFilter("url") it
		// grabs the pathPrefix argument from your config for you.
		throw new Error("pathPrefix (String) is required in the `url` filter.");
	}

	let normUrl = normalizeUrlPath(url);
	let normRootDir = normalizeUrlPath("/", pathPrefix);
	let normFull = normalizeUrlPath("/", pathPrefix, url);
	let isRootDirTrailingSlash =
		normRootDir.length && normRootDir.charAt(normRootDir.length - 1) === "/";

	// minor difference with straight `normalize`, "" resolves to root dir and not "."
	// minor difference with straight `normalize`, "/" resolves to root dir
	if (normUrl === "/" || normUrl === normRootDir) {
		return normRootDir + (!isRootDirTrailingSlash ? "/" : "");
	} else if (normUrl.indexOf("/") === 0) {
		return normFull;
	}

	return normUrl;
}

function normalizeUrlPath(...urlPaths: string[]) {
	const urlPath = path.join(...urlPaths);
	return urlPath.replace(/\/+$/, "/");
}
