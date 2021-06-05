import React from "react";
import { BaseLayout } from "./_includes/base-layout";
import { EleventyFilters } from "./_includes/eleventy-filters";
import { Button } from "../components/button/button";

export const data = {
	layout: "react",
	eleventyNavigation: {
		key: "Home",
	},
	isHome: true,
	description: "Todo: Home page description...",
};

export function render(data: any) {
	// console.log(data);

	return (
		<BaseLayout eleventyData={data}>
			<div className="wrapper">
				<p>
					<Button>hi</Button>
				</p>
				<p>Posts:</p>
				<ol>
					{data.collections.posts.map((post) => {
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
