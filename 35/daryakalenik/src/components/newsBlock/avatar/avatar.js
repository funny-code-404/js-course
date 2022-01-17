import picture from "./picture";
import styles from "./style";
import { imgAndInfoWrapper } from "../cv";

class Avatar {
  createAvatar(container) {
    const avatar = document.createElement("img");
    avatar.src = picture;
    avatar.classList.add(`avatar`);
    container.appendChild(avatar);
  }
}

export const avatar = new Avatar();
