import React from "react";
import { Button } from "../../components/button/button";
import { EleventyFilters } from "../includes/eleventy-typescript";
import { defineTemplate } from "../includes/eleventy-typescript/react";
import { Layout } from "../includes/layout";

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
			<Layout eleventyData={eleventyData}>
				<div className="wrapper">
					<p>
						<Button>hi</Button>
					</p>
					<p>Posts:</p>
					<ol>
						{eleventyData.collections.post
							.slice(-3)
							.reverse()
							.map((post) => {
								return (
									<li key="_">
										<a href={EleventyFilters.url(post.url)}>
											{post.data.title}
										</a>
									</li>
								);
							})}
					</ol>
					<p>
						<a href={EleventyFilters.url("/posts/")}>View All</a>
					</p>
				</div>
			</Layout>
		);
	}
);
