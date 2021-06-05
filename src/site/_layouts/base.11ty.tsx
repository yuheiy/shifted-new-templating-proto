import React from "react";
import ReactDOMServer from "react-dom/server";
import { EleventyFilters } from "../_includes/eleventy-filters";
import { PageHead } from "../../components/page-head/page-head";

export const data = {};

export function render(data: any) {
	// console.log(data);

	return renderReact(
		<html lang={data.metadata.lang}>
			<head>
				<meta charSet={data.metadata.encoding} />

				<title>
					{data.isHome
						? data.metadata.siteTitle
						: `${data.title} - ${data.metadata.siteTitle}`}
				</title>

				<meta name="viewport" content="width=device-width" />
				<meta name="description" content={data.description} />
				<meta
					property="og:title"
					content={data.isHome ? data.metadata.siteTitle : data.title}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${data.metadata.scheme}://${
						data.metadata.domain
					}${EleventyFilters.url("/ogp.png")}`}
				/>
				<meta
					property="og:url"
					content={`${data.metadata.scheme}://${
						data.metadata.domain
					}${EleventyFilters.url(data.page.url)}`}
				/>
				<meta property="og:description" content={data.description} />
				<meta property="og:site_name" content={data.metadata.siteTitle} />
				<meta
					property="og:locale"
					content={`${data.metadata.lang}_${data.metadata.region}`}
				/>

				<meta name="twitter:card" content="summary_large_image" />

				<link rel="cannonical" href={EleventyFilters.url(data.page.url)} />
				<link rel="icon" href={EleventyFilters.url("/favicon.ico")} />
				<link
					rel="apple-touch-icon"
					href={EleventyFilters.url("/apple-touch-icon.png")}
				/>

				{data.env.isDev && (
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
					pages={EleventyFilters.eleventyNavigation(data.collections.all)}
					eleventyNavigation={data.eleventyNavigation}
				/>

				{typeof data.content === "object" && <div>{data.content}</div>}
				{typeof data.content === "string" && (
					<div dangerouslySetInnerHTML={{ __html: data.content }}></div>
				)}
			</body>
		</html>
	);
}

function renderReact(children: React.ReactElement) {
	const rendered = ReactDOMServer.renderToStaticMarkup(children);
	return "<!doctype html>" + rendered;
}
