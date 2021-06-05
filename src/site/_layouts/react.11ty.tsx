import ReactDOMServer from "react-dom/server";

export const data = {};

export function render(eleventyData: any) {
	const rendered = ReactDOMServer.renderToStaticMarkup(eleventyData.content);
	return "<!doctype html>" + rendered;
}
