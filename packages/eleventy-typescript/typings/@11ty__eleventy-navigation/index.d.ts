declare module "@11ty/eleventy-navigation" {
	import { EleventyTemplate } from "@11ty/eleventy";

	interface EleventyNavigationInput {
		key: string;
		parent?: string;
		title?: string;
		order?: number;
		url?: string;
		excerpt?: string;
	}

	function findNavigationEntries(
		nodes: EleventyTemplate[],
		key?: string
	): (EleventyNavigationInput & {
		parentKey?: string;
		url: string;
		title: string;
		children?: ReturnType<typeof findNavigationEntries>;
		pluginType: "eleventy-navigation";
	})[];

	function findBreadcrumbEntries(
		nodes: EleventyTemplate[],
		activeKey: string,
		options?: {
			includeSelf?: boolean;
		}
	): (EleventyNavigationInput & {
		url: string;
		title: string;
	})[];

	export const navigation = {
		find: findNavigationEntries,
		findBreadcrumbs: findBreadcrumbEntries,
	};
}
