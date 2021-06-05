import ReactDOMServer from "react-dom/server";

export const data = {};

export function render(data: any) {
	const rendered = ReactDOMServer.renderToStaticMarkup(data.content);
	return "<!doctype html>" + rendered;
}
