import './styles.scss';


class ContactsPage {
	constructor(image) {
		this.image = image;
		return this.render();
	}


	render() {
		const contCont = document.createElement('div');
		contCont.classList.add('contacts__container');
		const contDiv1 = document.createElement('div');
		const contDiv2 = document.createElement('div');
		const contDiv3 = document.createElement('div');
		contDiv1.classList.add('contacts__container--1');
		contDiv2.classList.add('contacts__container--2');
		contDiv3.classList.add('contacts__container--3');
		contCont.appendChild(contDiv1);
		contCont.appendChild(contDiv2);
		contCont.appendChild(contDiv3);
		const h1 = document.createElement('h1');
		const p = document.createElement('p');
		contDiv2.appendChild(h1);
		contDiv2.appendChild(p);
		h1.innerHTML = "Anastasiya Shinkovich";
		h1.classList.add('avatar__name');
		const img = document.createElement('img');
		img.src = this.image;
		img.classList.add('avatar');
		p.appendChild(img);
		const contDiv1H1 = document.createElement('h1');
		const contDiv1P = document.createElement('p');
		const contDiv1P_2 = document.createElement('p');
		const contDiv1P_3 = document.createElement('p');
		contDiv1.appendChild(contDiv1H1);
		contDiv1.appendChild(contDiv1P);
		contDiv1.appendChild(contDiv1P_2);
		contDiv1.appendChild(contDiv1P_3);
		contDiv1H1.innerHTML = "Biography";
		contDiv1P.innerHTML = "Belarus, Grodno";
		contDiv1P_2.innerHTML = "29 y.o.";
		contDiv1P_3.innerHTML = "+375(33)3258366";

		const contDiv3H1 = document.createElement('h1');
		const contDiv3P = document.createElement('p');
		const contDiv3P_2 = document.createElement('p');
		const contDiv3P_3 = document.createElement('p');
		contDiv3.appendChild(contDiv3H1);
		contDiv3.appendChild(contDiv3P);
		contDiv3.appendChild(contDiv3P_2);
		contDiv3.appendChild(contDiv3P_3);
		contDiv3H1.innerHTML = "Professional skills";
		contDiv3P.innerHTML = "HTML/CSS/JS";
		contDiv3P_2.innerHTML = "BEM, WEBPACK,JEST";
		contDiv3P_3.innerHTML = "MVC";


		return contCont;
	}
}

export default ContactsPage;

