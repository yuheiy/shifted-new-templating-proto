import React from "react";
import { BaseLayout } from "../_includes/base-layout";
import { defineTemplate } from "../_includes/eleventy-typescript/react";

module.exports = defineTemplate<{
	title?: string;
	content: string;
}>(
	{
		isPostSingle: true,
	},
	(eleventyData) => {
		const title = eleventyData.title;
		if (!title) {
			throw new Error("`title` is required");
		}

		return (
			<BaseLayout eleventyData={eleventyData}>
				<h1>{title}</h1>
				<div
					className="wrapper"
					dangerouslySetInnerHTML={{ __html: eleventyData.content }}
				/>
			</BaseLayout>
		);
	}
);
