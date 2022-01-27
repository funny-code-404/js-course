import styles from "./style";
import { dateAndSignWrapper } from "../cv";

class DateAndSign {
  createDateAndSign(container) {
    const dateName = document.createElement(`p`);
    dateName.textContent = `DATE`;
    const date = document.createElement("input");
    container.appendChild(dateName);
    container.appendChild(date);
    dateName.classList.add(`date`);
    date.classList.add(`date`);
    const signName = document.createElement(`p`);
    signName.textContent = `SIGN`;
    const sign = document.createElement("input");
    container.appendChild(signName);
    container.appendChild(sign);
    signName.classList.add(`sign`);
    sign.classList.add(`sign`);
  }
}

export const dateAndSign = new DateAndSign();
