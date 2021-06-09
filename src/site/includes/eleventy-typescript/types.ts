import pkg from "../../../../package.json";

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
export type EleventyGlobalData = Record<
	EleventyGlobalDataNames,
	{
		[key: string]: any;
	}
>;

// Todo: should use deep merge
export type EleventyCommonData = EleventySuppliedData & EleventyGlobalData;
