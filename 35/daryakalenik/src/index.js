import "./styles/styles";
import { App } from "./App";

export const container = document.createElement(`div`);
document.body.appendChild(container);
container.classList.add(`container`);

const app = new App(container);
