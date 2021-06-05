import React from "react";
import ReactDOMServer from "react-dom/server";
import { PageHead } from "../../components/page-head/page-head";

export const data = {};

export function render(data: any) {
	// console.log(this);
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
					content={`${data.metadata.scheme}://${data.metadata.domain}${this.url(
						"/ogp.png"
					)}`}
				/>
				<meta
					property="og:url"
					content={`${data.metadata.scheme}://${data.metadata.domain}${this.url(
						data.page.url
					)}`}
				/>
				<meta property="og:description" content={data.description} />
				<meta property="og:site_name" content={data.metadata.siteTitle} />
				<meta
					property="og:locale"
					content={`${data.metadata.lang}_${data.metadata.region}`}
				/>

				<meta name="twitter:card" content="summary_large_image" />

				<link rel="cannonical" href={this.url(data.page.url)} />
				<link rel="icon" href={this.url("/favicon.ico")} />
				<link rel="apple-touch-icon" href={this.url("/apple-touch-icon.png")} />

				{data.env.isDev && (
					<>
						<script type="module" src={this.url("/@vite/client")}></script>
						<script type="module" src={this.url("/src/main.ts")}></script>
					</>
				)}
			</head>

			<body>
				<PageHead
					pages={this.eleventyNavigation(data.collections.all)}
					pageUrl={data.page.url}
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
