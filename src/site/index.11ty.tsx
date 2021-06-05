import React from "react";
import { Button } from "../components/button/button";

export const data = {
	eleventyNavigation: {
		key: "Home",
	},
	layout: "base.11ty.js",
	isHome: true,
	description: "Todo: Home page description...",
};

export function render(data: any) {
	// console.log(this);
	// console.log(data);

	return (
		<div className="wrapper">
			<p>
				<Button>hi</Button>
			</p>
			<p>Posts:</p>
			<ol>
				{data.collections.posts.map((post) => {
					return (
						<li key="_">
							<a href={this.url(post.url)}>{post.data.title}</a>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
