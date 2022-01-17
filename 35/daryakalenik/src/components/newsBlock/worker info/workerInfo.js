import styles from "./style";
import { imgAndInfoWrapper } from "../cv";

class WorkerInfo {
  createWorkerInfo(container) {
    const workerInfo = document.createElement("p");
    workerInfo.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus augue, imperdiet sit amet lacinia et, accumsan eu felis. Nunc mollis eu velit sed lobortis. Curabitur porta orci eget eros ullamcorper ornare. Quisque porta imperdiet nibh nec tempor. Aenean at quam non purus condimentum vestibulum et sed tellus. Fusce vel lacus diam. Sed fermentum magna ex, sed tempus sapien consequat sit amet. Nulla facilisi. Morbi dolor lorem, vehicula ut luctus et, interdum in magna. Sed in varius est, congue tempus turpis. Maecenas vel ipsum finibus metus blandit fermentum et quis magna.
Sed vitae dapibus magna. Donec eget dapibus magna. Pellentesque et tortor vehicula, eleifend elit nec, imperdiet nulla. Sed arcu ante, tempor ut ipsum at, convallis scelerisque magna. Quisque eu tempus magna, ut facilisis turpis. Duis ullamcorper venenatis lectus vitae elementum. Suspendisse potenti. Integer condimentum augue ac est maximus gravida. Nullam risus velit, mattis a sollicitudin quis, auctor at mauris.`;
    workerInfo.classList.add(`worker-info`);
    container.appendChild(workerInfo);
  }
}

export const workerInfo = new WorkerInfo();
