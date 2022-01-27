import { createAvatar } from './avatar/avatar';
import { main } from '../../app';
import { createBio } from './bio/bio';
import { createInfo } from './info/info';
import { createSign } from './sign/sign';

class Resume{
	constructor() {
		this.init();
	}
	init() {
		this.render();
	};
	render() {
		const el = document.createElement('article');
		el.className = 'resume';
		
		el.appendChild(createAvatar());
		el.appendChild(createBio());
		el.appendChild(createInfo());
		el.appendChild(createSign());
		main.appendChild(el);
	};

}
export default Resume;


