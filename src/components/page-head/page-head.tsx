import { navigation } from "@11ty/eleventy-navigation";
import { EleventyFilters } from "eleventy-typescript";
import React from "react";

type PageHeadProps = {
	pages: ReturnType<typeof navigation.find>;
	eleventyNavigationKey?: string;
};

export function PageHead({ pages, eleventyNavigationKey }: PageHeadProps) {
	function isCurrent(page) {
		return page.key === eleventyNavigationKey;
	}

	return (
		<header>
			{pages.map((page) => {
				return (
					<React.Fragment key="_">
						<p>
							<a
								href={
									!isCurrent(page) ? EleventyFilters.url(page.url) : undefined
								}
							>
								{page.title}
							</a>
						</p>
						<ul>
							{page.children.map((page) => {
								return (
									<li key="_">
										<a
											href={
												!isCurrent(page)
													? EleventyFilters.url(page.url)
													: undefined
											}
										>
											{page.title}
										</a>
									</li>
								);
							})}
						</ul>
					</React.Fragment>
				);
			})}
			<hr />
		</header>
	);
}
