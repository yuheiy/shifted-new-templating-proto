import "./css/main.scss";
import { mount } from "./app";
import logo from "./assets/logo.png";

const i = document.createElement("img");
i.src = logo;
document.body.append(i);

setTimeout(mount, 1000);
