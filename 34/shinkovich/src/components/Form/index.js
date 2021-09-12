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
		return data;
	}

	async getDataInp() {
		const data = await getInputs();
		observer.state = data;
		observer.notify('ondatareceived');
		return data;
	}
	async getDataBl() {
		const data = await getBlocks();
		observer.state = data;
		observer.notify('ondatareceived');
		return data;
	}

	render() {

		const newsCont = document.createElement('div');//главный контейнер
		newsCont.classList.add('news__container--min');

		const contDiv1 = document.createElement('div');//вспомогательные контейнеры
		const contDiv2 = document.createElement('div');
		const contDiv3 = document.createElement('div');

		contDiv1.classList.add('news__container--1');
		contDiv2.classList.add('news__container--2');
		contDiv3.classList.add('news__container--3');

		newsCont.appendChild(contDiv1);
		newsCont.appendChild(contDiv2);
		newsCont.appendChild(contDiv3);

		contDiv3.innerHTML = '3container';

		////////////..........КНОПКИ

		const btn = document.createElement('button');//кнопка, по клику на которую появляются кнопки из запроса
		contDiv1.appendChild(btn);
		btn.classList.add('btn');
		btn.innerHTML = 'buttons';

		btn.addEventListener('click', async () => {

			const data = await this.getDataBut();

			//const [cssdata] = data.data;//получение и дестр данных

			const allBtns = [...data.data];

			const id = allBtns.map(el => {//получение id в переменную
				return el.id
			})

			const bG = allBtns.map(el => {
				return el["background-color"]
			})

			const bR = allBtns.map(el => {
				return el["border-radius"]
			})

			const wid = allBtns.map(el => {
				return el.width
			})

			const hei = allBtns.map(el => {
				return el.height
			})
			console.log(wid);


			for (let i = 0; i <= 2; i++) {//создание кнопок из запроса

				let btns = document.createElement('button');
				btns.innerHTML = 'кнопка';

				btns.style.cssText = `
			background-color: ${bG[i]};
			height: ${hei[i]};
			width: ${wid[i]};
			border-radius: ${bR[i]}
			`;

				let att1 = document.createAttribute("id");//раздача id
				att1.value = id[i];
				btns.setAttributeNode(att1)

				let att = document.createAttribute("name");
				att.value = "secondary";
				btns.setAttributeNode(att);

				contDiv2.appendChild(btns);
			}
		});

		/////////////.......БЛОКИ

		const btnBlock = document.createElement('button');
		contDiv1.appendChild(btnBlock);
		btnBlock.classList.add('btn');
		btnBlock.innerHTML = 'blocks';

		btnBlock.addEventListener('click', async () => {
			const data = await this.getDataBl();

			const [allBlocks] = data.data;

			const allBl = [...data.data];
			const id = allBl.map(el => {//получение id в переменную
				return el.id
			})

			for (let i = 0; i <= 1; i++) {

				let blocks = document.createElement('div');
				blocks.innerHTML = 'блок';

				blocks.style.cssText = `
			background-color: ${allBlocks['background-color']};
			height: ${allBlocks.height};
			width: ${allBlocks.width};
			border-radius: ${allBlocks['border-radius']}
			`;
				let att = document.createAttribute("name");
				att.value = "secondary";
				blocks.setAttributeNode(att);

				let att1 = document.createAttribute("id");
				att1.value = id[i];
				blocks.setAttributeNode(att1);

				contDiv2.appendChild(blocks);
			}
		});

		/////////////.......INPUTS

		const btnInp = document.createElement('button');
		contDiv1.appendChild(btnInp);
		btnInp.classList.add('btm');
		btnInp.innerHTML = 'inputs';

		btnInp.addEventListener('click', async () => {
			const data = await this.getDataInp();

			const [allInp] = data.data;

			const allInputs = [...data.data];
			const id = allInputs.map(el => {//получение id в переменную
				return el.id
			})

			for (let i = 0; i <= 9; i++) {

				let inputs = document.createElement('input');

				inputs.style.cssText = `
			background-color: ${allInp['background-color']};
			height: ${allInp.height};
			width: ${allInp.width};
			border-radius: ${allInp['border-radius']}
			`;
				let att = document.createAttribute("name");
				att.value = "secondary";
				inputs.setAttributeNode(att);

				let att1 = document.createAttribute("id");
				att1.value = id[i];
				inputs.setAttributeNode(att1);

				let att2 = document.createAttribute("placeholder");
				att2.value = "инпут";
				inputs.setAttributeNode(att2);

				contDiv2.appendChild(inputs);
			}
		});

		return newsCont;
	}
}

export default Form;
