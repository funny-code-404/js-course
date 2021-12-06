import { createSrcImg } from "./module/avatar/index.js";
import { autobiography } from "./module/autobiography/index.js";
import { infoMaker } from "./module/infoPerson/index.js";
import { sign } from "./module/sign/index.js";
import "./module/mainStyle.scss";

class AboutBlock {
  constructor() {
    return this.init();
  }

  init() {
    return this.render();
  }
  render() {
    const root = document.createElement("div");
    root.classList.add("root");
    root.append(createSrcImg());
    root.append(infoMaker());
    root.append(autobiography());
    root.append(sign());

    return root;
  }
}

export default AboutBlock;
