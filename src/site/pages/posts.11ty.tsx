import { defineTemplate } from "eleventy-typescript/react";
import React from "react";
import { Layout } from "../includes/layout";

module.exports = defineTemplate(
	{
		pagination: {
			data: "collections.post",
			size: 5,
			reverse: true,
		},
		permalink: (data) =>
			`posts/${
				data.pagination.pageNumber
					? `page-${data.pagination.pageNumber + 1}/`
					: ""
			}`,
		eleventyNavigation: {
			key: "Posts",
			parent: "Home",
		},
		title: "Posts",
		description: "Todo: Posts page description...",
	},
	(eleventyData) => {
		return (
			<Layout eleventyData={eleventyData}>
				<div className="wrapper">
					<h1>Posts</h1>
					<ol>
						{eleventyData.pagination.items.map((item) => {
							return (
								<li key="_">
									<a href={item.url}>{item.data.title}</a>
								</li>
							);
						})}
					</ol>
					<p>Pages:</p>
					<ol>
						{eleventyData.pagination.hrefs.map((href, index) => {
							return (
								<li key="_">
									<a
										href={
											index !== eleventyData.pagination.pageNumber
												? href
												: undefined
										}
									>
										{index + 1}
									</a>
								</li>
							);
						})}
					</ol>
				</div>
			</Layout>
		);
	}
);
