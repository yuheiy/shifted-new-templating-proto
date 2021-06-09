import React from "react";
import { EleventyFilters } from "../../site/includes/eleventy-typescript";

type PageHeadProps = {
	pages: any;
	eleventyNavigation?: {
		key: string;
	};
};

export function PageHead({ pages, eleventyNavigation }: PageHeadProps) {
	return (
		<header>
			{pages.map((page) => {
				return (
					<React.Fragment key="_">
						<p>
							<a
								href={
									page.key !== eleventyNavigation?.key
										? EleventyFilters.url(page.url)
										: undefined
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
												page.key !== eleventyNavigation?.key
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
