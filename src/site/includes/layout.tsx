import { EleventySuppliedData } from "@11ty/eleventy";
import { navigation } from "@11ty/eleventy-navigation";
import React from "react";
import { PageHead } from "../../components/page-head/page-head";
import { isDev } from "../data/env";
import * as metadata from "../data/metadata";
import { EleventyFilters } from "./eleventy-typescript";
import "./setup";

type LayoutProps = {
	eleventyData: Partial<EleventySuppliedData> & {
		[key: string]: any;
	};
	children: React.ReactNode;
};

export function Layout({ eleventyData, children }: LayoutProps) {
	const origin = `${metadata.scheme}://${metadata.domain}`;

	return (
		<html lang={metadata.lang}>
			<head>
				<meta charSet={metadata.encoding} />

				<title>
					{eleventyData.title
						? `${eleventyData.title} - ${metadata.siteTitle}`
						: metadata.siteTitle}
				</title>

				<meta name="viewport" content="width=device-width" />
				<meta name="description" content={eleventyData.description} />
				<meta name="format-detection" content="telephone=no" />
				<meta name="twitter:card" content="summary_large_image" />

				<meta
					property="og:title"
					content={eleventyData.title || metadata.siteTitle}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${origin}${EleventyFilters.url("/ogp.png")}`}
				/>
				<meta
					property="og:url"
					content={`${origin}${EleventyFilters.url(eleventyData.page.url)}`}
				/>
				<meta property="og:description" content={eleventyData.description} />
				<meta property="og:site_name" content={metadata.siteTitle} />
				<meta
					property="og:locale"
					content={`${metadata.lang}_${metadata.region}`}
				/>

				<link
					rel="cannonical"
					href={EleventyFilters.url(eleventyData.page.url)}
				/>
				<link rel="icon" href={EleventyFilters.url("/favicon.ico")} />
				<link
					rel="apple-touch-icon"
					href={EleventyFilters.url("/apple-touch-icon.png")}
				/>

				{isDev && (
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
					pages={navigation.find(eleventyData.collections.all)}
					eleventyNavigation={eleventyData.eleventyNavigation}
				/>

				{children}
			</body>
		</html>
	);
}
