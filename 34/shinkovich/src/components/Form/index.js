import { getButtons } from '@services/buttonsApi';
import { getInputs } from '@services/inputsApi';
import { getBlocks } from '@services/blocksApi';

import observer from '@utils/observer';

import './styles.scss';

class Form {
	constructor() {
		return this.render();
	}

	async getDataBut() {
		const data = await getButtons();
		observer.state = data;
		observer.notify('ondatareceived');
		let [b1, b2, b3] = data.data;
	}



	async getDataInp() {
		const data = await getInputs();
		observer.state = data;
		observer.notify('ondatareceived');
		let [i1, i2, i3, i4, i5, i6, i7, i8, i9] = data.data;
	}
	async getDataBl() {
		const data = await getBlocks();
		observer.state = data;
		observer.notify('ondatareceived');
		let [b1, b2] = data.data;
	}

	render() {
		this.getDataBut();
		this.getDataInp();
		this.getDataBl();
		const newsCont = document.createElement('div');
		newsCont.classList.add('news__container--min');
		const contDiv1 = document.createElement('div');
		const contDiv2 = document.createElement('div');
		const contDiv3 = document.createElement('div');
		contDiv1.classList.add('news__container--1');
		contDiv2.classList.add('news__container--2');
		contDiv3.classList.add('news__container--3');
		newsCont.appendChild(contDiv1);
		newsCont.appendChild(contDiv2);
		newsCont.appendChild(contDiv3);
		const btn = document.createElement('button');
		contDiv1.appendChild(btn);
		btn.classList.add('btn');
		btn.innerHTML = 'buttons';
		contDiv3.innerHTML = '3container';

		btn.addEventListener('click', function () {

			for (let i = 1; i <= 3; i++) {

				let btns = document.createElement('button');
				btns.innerHTML = '!!!!!';

				btns.style.cssText = `
	background-color: ${b1['background-color']};
	height: ${b1.height};
	border-radius: ${b1['border-radius']}
	`;
				var att = document.createAttribute("name");
				att.value = "secondary";
				btns.setAttributeNode(att);

				contDiv2.appendChild(btns);
			}

		});

		return newsCont;
	}
}

export default Form;
