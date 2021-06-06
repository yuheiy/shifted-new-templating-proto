import React from "react";
import { render } from "react-dom";
import { Button } from "./components/button/button";
import logo from "./logo.png";

export async function mount() {
	if (!document.querySelector("button")) {
		return;
	}

	document.querySelector("button").focus();

	await delay(1000);

	render(
		<Button>{logo}</Button>,
		document.querySelector("button").parentElement
	);

	console.assert(
		!(document.activeElement instanceof HTMLButtonElement),
		"should have been destroyed"
	);

	await delay(1000);

	document.querySelector("button").focus();

	await delay(1000);

	render(
		<Button>
			{logo}
			{logo}
		</Button>,
		document.querySelector("button").parentElement
	);

	console.assert(
		document.activeElement instanceof HTMLButtonElement,
		"should not have been destroyed"
	);
}

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
