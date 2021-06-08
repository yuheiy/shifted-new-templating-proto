import React from "react";
import { PageHead } from "../../components/page-head/page-head";
import { EleventyCommonData, EleventyFilters } from "./eleventy-typescript";

type BaseLayoutProps = {
	eleventyData: Partial<EleventyCommonData> & {
		[key: string]: any;
	};
	children: React.ReactNode;
};

export function BaseLayout({ eleventyData, children }: BaseLayoutProps) {
	return (
		<html lang={eleventyData.metadata.lang}>
			<head>
				<meta charSet={eleventyData.metadata.encoding} />

				<title>
					{eleventyData.isHome
						? eleventyData.metadata.siteTitle
						: `${eleventyData.title} - ${eleventyData.metadata.siteTitle}`}
				</title>

				<meta name="viewport" content="width=device-width" />
				<meta name="description" content={eleventyData.description} />
				<meta
					property="og:title"
					content={
						eleventyData.isHome
							? eleventyData.metadata.siteTitle
							: eleventyData.title
					}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${eleventyData.metadata.scheme}://${
						eleventyData.metadata.domain
					}${EleventyFilters.url("/ogp.png")}`}
				/>
				<meta
					property="og:url"
					content={`${eleventyData.metadata.scheme}://${
						eleventyData.metadata.domain
					}${EleventyFilters.url(eleventyData.page.url)}`}
				/>
				<meta property="og:description" content={eleventyData.description} />
				<meta
					property="og:site_name"
					content={eleventyData.metadata.siteTitle}
				/>
				<meta
					property="og:locale"
					content={`${eleventyData.metadata.lang}_${eleventyData.metadata.region}`}
				/>

				<meta name="twitter:card" content="summary_large_image" />

				<link
					rel="cannonical"
					href={EleventyFilters.url(eleventyData.page.url)}
				/>
				<link rel="icon" href={EleventyFilters.url("/favicon.ico")} />
				<link
					rel="apple-touch-icon"
					href={EleventyFilters.url("/apple-touch-icon.png")}
				/>

				{eleventyData.env.isDev && (
					<>
						<script
							type="module"
							src={EleventyFilters.url("/@vite/client")}
						></script>
						<script
							type="module"
							src={EleventyFilters.url("/src/main.ts")}
						></script>
					</>
				)}
			</head>

			<body>
				<PageHead
					pages={EleventyFilters.eleventyNavigation(
						eleventyData.collections.all
					)}
					eleventyNavigation={eleventyData.eleventyNavigation}
				/>

				{children}
			</body>
		</html>
	);
}
