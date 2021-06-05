import React from "react";
import { BaseLayout } from "./_includes/base-layout";
import { defineEleventyPage } from "./_includes/define-eleventy-page";

export const { data, render } = defineEleventyPage(
	{
		eleventyNavigation: {
			key: "About",
			parent: "Home",
		},
		title: "About",
		description: "Todo: About page description...",
	},
	(eleventyData) => {
		return (
			<BaseLayout eleventyData={eleventyData}>
				<div className="wrapper">
					<h1>About</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
						sapiente sed ipsum ducimus tenetur impedit, temporibus alias,
						corporis amet recusandae perspiciatis fugit ipsa provident neque
						quam officiis nihil quia distinctio.
					</p>
				</div>
			</BaseLayout>
		);
	}
);
