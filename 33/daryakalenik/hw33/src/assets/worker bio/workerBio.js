import { wrapper } from "../../index";
import styles from "./style";
import { dateAndSignWrapper } from "../../index";

class WorkerBio {
  createWorkerBio() {
    const workerBio = document.createElement("p");
    workerBio.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus augue, imperdiet sit amet lacinia et, accumsan eu felis. Nunc mollis eu velit sed lobortis. Curabitur porta orci eget eros ullamcorper ornare. Quisque porta imperdiet nibh nec tempor. Aenean at quam non purus condimentum vestibulum et sed tellus. Fusce vel lacus diam. Sed fermentum magna ex, sed tempus sapien consequat sit amet. Nulla facilisi. Morbi dolor lorem, vehicula ut luctus et, interdum in magna. Sed in varius est, congue tempus turpis. Maecenas vel ipsum finibus metus blandit fermentum et quis magna.`;
    workerBio.classList.add(`worker-bio`);
    wrapper.insertBefore(workerBio, dateAndSignWrapper);
  }
}

export const workerBio = new WorkerBio();
