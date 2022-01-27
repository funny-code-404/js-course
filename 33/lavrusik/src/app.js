import Application from "./components/application/application";
import Data from "./components/data/data";
import Nav, { APP_ROUTES } from "./components/navigation/nav"; 
import Resume from "./components/resume/resume";
export const main = document.getElementById('main');
class App{
	constructor(){
		return this.init();
	}
	init() {
		 window.onhashchange = () => {
      this.render();
		};
		return this.render();
	};
	render() {
		console.log('ghbdtn');
		main.innerHTML = '';
		main.appendChild(new Nav);
		switch (window.location.hash.slice(1)) {
			case APP_ROUTES.resume:
				this.renderResume();
				break;
			case APP_ROUTES.application:
				this.renderApplication();
				break;
			case APP_ROUTES.data:
				this.renderData();
				break;
		}
	};
	renderResume() {
		const resume = new Resume;
	};
	renderApplication() {
		const application = new Application;
	};
	renderData() {
		const data = new Data;
	};
}
export default App;






























