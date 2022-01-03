import './styles';
import { hours } from './parts/hours'
import { minutes } from './parts/minutes'
import { seconds } from './parts/seconds'

export const app = (block) => {
  const appBlock = document.createElement('div');
  appBlock.className = 'clock';
  hours(appBlock);
  minutes(appBlock);
  seconds(appBlock);
  block.appendChild(appBlock);
};
export const func = () => {
  const hr = document.querySelector('hr');
  const mn = document.querySelector('mn');
  const sc = document.querySelector('sc');
  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  })
};