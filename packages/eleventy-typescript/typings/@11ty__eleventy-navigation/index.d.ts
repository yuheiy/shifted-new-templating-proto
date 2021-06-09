declare module "@11ty/eleventy-navigation" {
	import { EleventyTemplate } from "@11ty/eleventy";

	export const navigation = {
		find: (nodes: EleventyTemplate[], key?: string) => any,
		findBreadcrumbs: (
			nodes: EleventyTemplate[],
			activeKey: string,
			options?: {
				includeSelf?: boolean;
			}
		) => any,
	};
}
