import React from "react";

export const data = {
	eleventyNavigation: {
		key: "About",
		parent: "Home",
	},
	layout: "base.11ty.js",
	title: "About",
	description: "Todo: About page description...",
};

export function render(data: any) {
	return (
		<div className="wrapper">
			<h1>About</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sapiente
				sed ipsum ducimus tenetur impedit, temporibus alias, corporis amet
				recusandae perspiciatis fugit ipsa provident neque quam officiis nihil
				quia distinctio.
			</p>
		</div>
	);
}
