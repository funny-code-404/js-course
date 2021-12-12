import "./styles/style";
import { createFoto } from "./helpers/foto/foto";
import { createAbout } from "./helpers/about/index";
import { createDate } from "./helpers/date/index";

const container = document.getElementById("container");

container.append(createFoto());
container.append(createAbout());
container.append(createDate());
