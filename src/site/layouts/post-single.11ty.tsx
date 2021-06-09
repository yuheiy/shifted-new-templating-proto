import { defineTemplate } from "eleventy-typescript/react";
import React from "react";
import { Layout } from "../includes/layout";

module.exports = defineTemplate<{
	title?: string;
	content: string;
}>(
	{
		isPostSingle: true,
	},
	(eleventyData) => {
		const title = eleventyData.title;
		if (title === undefined) {
			throw new Error("`title` is required");
		}

		return (
			<Layout eleventyData={eleventyData}>
				<h1>{title}</h1>
				<div
					className="wrapper"
					dangerouslySetInnerHTML={{ __html: eleventyData.content }}
				/>
			</Layout>
		);
	}
);
