import { mount } from "./app";
import logo from "./assets/logo.png";
import "./css/main.scss";

const i = document.createElement("img");
i.src = logo;
document.body.append(i);

setTimeout(mount, 1000);
