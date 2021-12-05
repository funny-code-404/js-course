import { main } from "../../app";
class Data{
	constructor() {
		return this.init();
	}
	init() {
		return this.render();
	}
	async render() {
		let dataInfo = await fetch('https://jsonplaceholder.typicode.com/posts');
		let data = await dataInfo.json();
		const article = document.createElement('article');
		article.className = 'data';
		Object.keys(data).forEach((item) => {
			const div = document.createElement('div');
			Object.keys(data[item]).forEach((key) => {
				const p = document.createElement('p');
				p.innerText = `${key}: ${data[item][key]}`
				div.appendChild(p);
			})
			article.appendChild(div);
		})
		main.appendChild(article);
	}
}
export default Data;







