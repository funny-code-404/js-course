export const APP_ROUTES = {
	resume: 'resume',
	application: 'application',
	data: 'data',
};
class Nav{
	constructor() {
		return this.init();
	}
	init() {
		return this.render();
	}
	render(){
		const nav = document.createElement('nav');
		nav.className = 'nav';
		Object.keys(APP_ROUTES).forEach((route) => {
			const a = document.createElement('a');
			a.innerHTML = route.toUpperCase();
			a.href = '#';
			a.id = APP_ROUTES[route];
			nav.appendChild(a);
		});
		nav.addEventListener('click', (e) => {
			if (e.target.tagName === 'A') {
				e.preventDefault();
				window.location.hash = e.target.id;
			}
		})
		return nav;
	}
}
export default Nav;