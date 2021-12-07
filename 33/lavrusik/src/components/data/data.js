import { main } from "../../app";
import { getAllPosts } from "./services/api/postsApi";
import { clickSinglePost } from "./services/helper/clickSinglePost";
class Data{
	constructor() {
		return this.init();
	}
	init() {
		this.render();
	}
	async render() {
		const data = await getAllPosts();
		const article = document.createElement('article');
		article.className = 'data';
		article.id = 'dataBlock';
		data.forEach((item) => {
			const div = document.createElement('div');
			Object.keys(item).forEach((key) => {
				const p = document.createElement('p');
				p.innerText = `${key}: ${item[key]}`;
				div.appendChild(p);	
			});
			const button = document.createElement('button');
			button.addEventListener('click', clickSinglePost);
			button.innerText = 'Show post';
			button.id = item.id;
			div.appendChild(button);
			article.appendChild(div);
		})
		main.appendChild(article);
	}
}
export default Data;







