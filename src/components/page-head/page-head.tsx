import React from "react";

export interface PageHeadProps {
	pages: any;
	pageUrl: string;
}

export function PageHead({ pages, pageUrl }: PageHeadProps) {
	return (
		<header>
			{pages.map((page) => {
				return (
					<React.Fragment key="_">
						<p>
							<a href={page.url !== pageUrl ? page.url : undefined}>
								{page.title}
							</a>
						</p>
						<ul>
							{page.children.map((page) => {
								return (
									<li key="_">
										<a href={page.url !== pageUrl ? page.url : undefined}>
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
