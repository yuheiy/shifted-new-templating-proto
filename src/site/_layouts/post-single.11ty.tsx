import React from "react";
import { BaseLayout } from "../_includes/base-layout";

export const data = {
	layout: "react",
};

export function render(eleventyData: any) {
	return (
		<BaseLayout eleventyData={eleventyData}>
			<div
				className="wrapper"
				dangerouslySetInnerHTML={{ __html: eleventyData.content }}
			/>
		</BaseLayout>
	);
}
