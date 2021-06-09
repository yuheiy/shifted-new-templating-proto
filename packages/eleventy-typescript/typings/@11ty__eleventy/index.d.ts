declare module "@11ty/eleventy" {
	interface Config {
		// pkg: typeof pkg;
		// collectionNames: 'all' | 'post';
	}

	// https://www.11ty.dev/docs/data-eleventy-supplied/
	interface EleventySuppliedData {
		pkg: Config["pkg"];
		pagination?: EleventyPagination;
		collections: Record<Config["collectionNames"], EleventyTemplate[]>;
		page: EleventyTemplateData;
	}

	// https://www.11ty.dev/docs/pagination/
	interface EleventyPagination {
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
	}

	// https://www.11ty.dev/docs/collections/#collection-item-data-structure
	interface EleventyTemplate {
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
	}

	interface EleventyTemplateData {
		url: string;
		fileSlug: string;
		filePathStem: string;
		date: Date;
		inputPath: string;
		outputPath: string;
	}

	// https://www.11ty.dev/docs/data-global/
	// interface EleventyGlobalData {}

	interface EleventyTemplateInputData {
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
		[key: string]: any;
	}
}

declare module "@11ty/eleventy/src/Filters/GetCollectionItem" {
	import { EleventyTemplate, EleventyTemplateData } from "@11ty/eleventy";

	export default function (
		collection: EleventyTemplate[],
		page: EleventyTemplateData,
		modifier?: number
	): EleventyTemplate | undefined {}
}

declare module "@11ty/eleventy/src/Filters/Slug" {
	export default function (str: string): string {}
}

declare module "@11ty/eleventy/src/Filters/Url" {
	export default function (url: string, pathPrefix: string): string {}
}
