import { defineTemplate } from "eleventy-typescript/react";
import React from "react";
import { Layout } from "../includes/layout";

module.exports = defineTemplate(
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
			<Layout eleventyData={eleventyData}>
				<div className="wrapper">
					<h1>About</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
						sapiente sed ipsum ducimus tenetur impedit, temporibus alias,
						corporis amet recusandae perspiciatis fugit ipsa provident neque
						quam officiis nihil quia distinctio.
					</p>
				</div>
			</Layout>
		);
	}
);
