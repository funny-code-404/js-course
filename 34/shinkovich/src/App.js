
import Form from './components/Form';
import Calendar from './components/calendar';
import ContactsPage from './components/contacts';
import image from '@assets/img/avatar';

import observer from './utils/observer';


const APP_ROUTES = {
	news: 'news',
	about: 'about',
	contacts: 'contacts',
};

class App {
	constructor(container) {
		return this.init(container);
	}

	renderNavigation(container) {
		const nav = document.createElement('nav');
		nav.classList.add('navigation');

		Object.keys(APP_ROUTES).forEach((route) => {
			const a = document.createElement('a');
			a.innerHTML = route.toUpperCase();
			a.href = '#';
			a.id = APP_ROUTES[route];
			a.classList.add('navigation__link');

			nav.appendChild(a);
		});

		nav.addEventListener('click', (e) => {
			if (e.target.tagName === 'A') {
				e.preventDefault();
				window.location.hash = e.target.id;
			} else {
				return;
			}
		});

		container.appendChild(nav);
	}

	renderNewsBlock(container) {
		const el = document.createElement('div');
		el.classList.add('news__container');
		el.appendChild(new Form());

		container.appendChild(el);
	}

	renderAboutBlock(container) {
		const el = document.createElement('div');
		el.classList.add('calendar__container');
		el.appendChild(new Calendar());
		container.appendChild(el);
	}

	renderContactsBlock(container) {
		const el = document.createElement('div');
		el.appendChild(new ContactsPage(image));
		container.appendChild(el);
	}

	renderHomePage(container) {
		const el = document.createElement('div');
		el.innerHTML = 'HOME';
		container.appendChild(el);
	}

	init(container) {
		window.onhashchange = () => this.render(container);
		observer.subscribe('ondatareceived', (state) => {
			console.log(state);
		});

		return this.render(container);
	}

	render(container) {
		const app = document.createElement('div');
		app.classList.add('main-wrappper');
		this.renderNavigation(app);

		switch (window.location.hash.slice(1)) {
			case APP_ROUTES.news:
				this.renderNewsBlock(app);
				break;
			case APP_ROUTES.about:
				this.renderAboutBlock(app);
				break;
			case APP_ROUTES.contacts:
				this.renderContactsBlock(app);
				break;
			default:
				this.renderHomePage(app);
		}

		container.innerHTML = '';
		container.appendChild(app);
	}
}

export default App;

// 1. переопределить поведение внутренних ссылок навигации
// 2. подписаться на изменения адресной строки
// 3. в зависимсоти от урла - генерировать контент


