import CVPage from "./components/CVPage";
import RequestPage from "./components/requestPage";
import AuthorizationPage from "./authorizationForm";
import DataBlock from "./components/dataBlock";

import "./style.css"

const APP_ROUTES = {
    CV: 'CV',
    form: 'form',
    request: 'request',
    comments: 'comments',

};

class App {
    constructor(container) {
        return this.init(container)
    }

    renderNavigation(container) {
        const nav = document.createElement('nav');

        Object.keys(APP_ROUTES).forEach((route) => {
            const a = document.createElement('a');
            a.innerHTML = route.toUpperCase();
            a.href = '#'
            a.id = APP_ROUTES[route];
            nav.appendChild(a);
        })

        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();

                window.location.hash = e.target.id
            } else {
                return
            }
        });
        container.appendChild(nav)
    }

    renderCVPage(container) {
        const CV = new CVPage()
        container.append(CV)
    }

    authorizationPage(container) {
        const form = new AuthorizationPage()
        container.append(form)
    }

    renderRequestPage(container) {
        new RequestPage(container)
    }

    renderCommentsPage(container){
        new DataBlock(container)
    }



    init(container) {
        window.onhashchange = () => {
            this.render(container)
        }
        return this.render(container)
    }

    render(container) {
        const elDiv = document.createElement('div')
        this.renderNavigation(elDiv)

        switch (window.location.hash.slice(1)) {

            case APP_ROUTES.CV:
                this.renderCVPage(elDiv);
                break;
            case APP_ROUTES.form:
                this.authorizationPage(elDiv);
                break;
            case APP_ROUTES.request:
                this.renderRequestPage(elDiv);
                break;
            case APP_ROUTES.comments:
                this.renderCommentsPage(elDiv);
                break;


        }
        container.innerText = '';
       container.append(elDiv)

    }
}

export default App