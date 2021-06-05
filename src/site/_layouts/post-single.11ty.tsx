import React from "react";
import { BaseLayout } from "../_includes/base-layout";

export const data = {
	layout: "react",
};

export function render(data: any) {
	return (
		<BaseLayout eleventyData={data}>
			<div
				className="wrapper"
				dangerouslySetInnerHTML={{ __html: data.content }}
			/>
		</BaseLayout>
	);
}
