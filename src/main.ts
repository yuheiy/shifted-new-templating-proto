import { EleventyFilters } from "eleventy-typescript";
import { mount } from "./app";
import logo from "./logo.png";
import "./site/includes/setup";
import "./styles/main.scss";

const i = document.createElement("img");
i.src = logo;
document.body.append(i);

setTimeout(mount, 1000);

console.log(EleventyFilters.url("/yo/a"));
