import React from "react";
import { BaseLayout } from "../_includes/base-layout";
import { defineEleventyTemplate } from "../_includes/define-eleventy-template";

export const { render } = defineEleventyTemplate(
	{
		title: "",
		content: "",
	},
	(eleventyData) => {
		return (
			<BaseLayout eleventyData={eleventyData}>
				<div
					className="wrapper"
					dangerouslySetInnerHTML={{ __html: eleventyData.content }}
				/>
			</BaseLayout>
		);
	}
);
