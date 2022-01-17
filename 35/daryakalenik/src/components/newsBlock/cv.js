import { avatar } from "./avatar/avatar";
import { workerInfo } from "./worker info/workerInfo";
import { WorkerBio } from "./worker bio/workerBio";
import { dateAndSign } from "./date & sign/dateSign";

export class CV {
  constructor() {
    return this.init();
  }

  init() {
    return this.render();
  }
  render() {
    const cvWrapper = document.createElement(`div`);
    const imgAndInfoWrapper = document.createElement(`div`);
    const dateAndSignWrapper = document.createElement(`div`);
    cvWrapper.classList.add(`wrapper`);
    imgAndInfoWrapper.classList.add(`imgAndInfoWrapper`);
    cvWrapper.appendChild(imgAndInfoWrapper);
    cvWrapper.appendChild(dateAndSignWrapper);
    dateAndSignWrapper.classList.add(`dateAndSignWrapper`);
    avatar.createAvatar(imgAndInfoWrapper);
    workerInfo.createWorkerInfo(imgAndInfoWrapper);
    const workerBio = new WorkerBio(cvWrapper, dateAndSignWrapper);
    dateAndSign.createDateAndSign(dateAndSignWrapper);
    return cvWrapper;
  }
}
