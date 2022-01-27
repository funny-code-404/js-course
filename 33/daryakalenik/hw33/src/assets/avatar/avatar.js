import picture from "/assets/avatar/picture";
import styles from "./style";
import { imgAndInfoWrapper } from "../../index";

class Avatar {
  createAvatar() {
    const avatar = document.createElement("img");
    avatar.src = picture;
    avatar.classList.add(`avatar`);
    imgAndInfoWrapper.appendChild(avatar);
  }
}

export const avatar = new Avatar();
