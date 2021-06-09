import React from "react";
import { Button } from "../../components/button/button";
import { BaseLayout } from "../includes/base-layout";
import { EleventyFilters } from "../includes/eleventy-typescript";
import { defineTemplate } from "../includes/eleventy-typescript/react";

module.exports = defineTemplate(
	{
		eleventyNavigation: {
			key: "Home",
		},
		isHome: true,
		description: "Todo: Home page description...",
	},
	(eleventyData) => {
		return (
			<BaseLayout eleventyData={eleventyData}>
				<div className="wrapper">
					<p>
						<Button>hi</Button>
					</p>
					<p>Posts:</p>
					<ol>
						{eleventyData.collections.posts.map((post) => {
							return (
								<li key="_">
									<a href={EleventyFilters.url(post.url)}>{post.data.title}</a>
								</li>
							);
						})}
					</ol>
				</div>
			</BaseLayout>
		);
	}
);
