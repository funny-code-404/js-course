import "./styles/styles";
import { avatar } from "/assets/avatar/avatar";
import { workerInfo } from "/assets/worker info/workerInfo";
import { workerBio } from "/assets/worker bio/workerBio";
import { dateAndSign } from "/assets/date & sign/dateSign";

export const wrapper = document.createElement(`div`);
document.body.appendChild(wrapper);
wrapper.classList.add(`wrapper`);
export const imgAndInfoWrapper = document.createElement(`div`);
imgAndInfoWrapper.classList.add(`imgAndInfoWrapper`);
wrapper.appendChild(imgAndInfoWrapper);
export const dateAndSignWrapper = document.createElement(`div`);
wrapper.appendChild(dateAndSignWrapper);
dateAndSignWrapper.classList.add(`dateAndSignWrapper`);

avatar.createAvatar();
workerInfo.createWorkerInfo();
workerBio.createWorkerBio();
dateAndSign.createDateAndSign();
