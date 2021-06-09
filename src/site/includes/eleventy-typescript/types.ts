import pkg from "../../../../package.json";

// manual update
export type EleventyCollectionNames = "all" | "post";

// https://www.11ty.dev/docs/data-eleventy-supplied/
export type EleventySuppliedData = {
	pkg: typeof pkg;
	pagination?: EleventyPagination;
	collections: Record<EleventyCollectionNames, EleventyTemplate[]>;
	page: EleventyTemplateData;
};

// https://www.11ty.dev/docs/pagination/
export type EleventyPagination = {
	items: EleventyTemplate[];
	pageNumber: number;
	hrefs: string[];
	href: {
		next: string | null;
		previous: string | null;
		first: string | null;
		last: string | null;
	};
	pages: EleventyTemplate[][];
	page: {
		next: EleventyTemplate[][] | null;
		previous: EleventyTemplate[][] | null;
		first: EleventyTemplate[][] | null;
		last: EleventyTemplate[][] | null;
	};
};

// https://www.11ty.dev/docs/collections/#collection-item-data-structure
export type EleventyTemplate = {
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
};

export type EleventyTemplateData = {
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
