import { JsonObject } from "type-fest";

// manual update
export type EleventyCollectionNames = "all" | "posts";

// https://www.11ty.dev/docs/data-eleventy-supplied/
export type EleventySuppliedData = {
	pkg: JsonObject;
	// https://www.11ty.dev/docs/pagination/
	pagination?: {
		// todo
	};
	collections: Record<EleventyCollectionNames, EleventyCollection>;
	page: EleventyPage;
};

// https://www.11ty.dev/docs/collections/#collection-item-data-structure
export type EleventyCollection = {
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
}[];

export type EleventyPage = {
	url: string;
	fileSlug: string;
	filePathStem: string;
	date: Date;
	inputPath: string;
	outputPath: string;
};

// https://www.11ty.dev/docs/data-global/
export type EleventyGlobalData = {
	[key: string]: {
		[key: string]: any;
	};
};

export type EleventyCommonData = EleventySuppliedData & EleventyGlobalData;
