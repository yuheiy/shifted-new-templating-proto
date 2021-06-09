import * as config from "../config";
import { mount } from "./app";
import logo from "./logo.png";
import {
	EleventyFilters,
	EleventyTypeScriptConfig,
} from "./site/includes/eleventy-typescript";
import "./styles/main.scss";

EleventyTypeScriptConfig.pathPrefix = config.pathPrefix;

const i = document.createElement("img");
i.src = logo;
document.body.append(i);

setTimeout(mount, 1000);

console.log(EleventyFilters.url("/yo/a"));
