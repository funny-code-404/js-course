import styles from "./style";
import { dateAndSignWrapper } from "../../index";

class DateAndSign {
  createDateAndSign() {
    const dateName = document.createElement(`p`);
    dateName.textContent = `DATE`;
    const date = document.createElement("input");
    dateAndSignWrapper.appendChild(dateName);
    dateAndSignWrapper.appendChild(date);
    dateName.classList.add(`date`);
    date.classList.add(`date`);
    const signName = document.createElement(`p`);
    signName.textContent = `SIGN`;
    const sign = document.createElement("input");
    dateAndSignWrapper.appendChild(signName);
    dateAndSignWrapper.appendChild(sign);
    signName.classList.add(`sign`);
    sign.classList.add(`sign`);
  }
}

export const dateAndSign = new DateAndSign();
