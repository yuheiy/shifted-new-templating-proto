import React from "react";
import { Merge } from "type-fest";
import { EleventyCommonData } from "./eleventy-types";

const defaultData = {
	layout: "react",
};

export function defineEleventyPage<
	U,
	T = Merge<typeof defaultData, U>,
	// https://www.11ty.dev/docs/data-cascade/
	E = Merge<EleventyCommonData, T> & {
		[key: string]: any;
	}
>(userData: U, render: (eleventyData: E) => React.ReactNode) {
	return {
		data: {
			...defaultData,
			...userData,
		},
		render,
	};
}
