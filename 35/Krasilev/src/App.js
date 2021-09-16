import observer from './utils/observer';
// MY CODE <-------------------------------->
const APP_ROUTES = {
  about: 'about',
  testimonials:'testimonials',
  buttons: 'buttons',
  blocks: 'blocks',
  inputs: 'inputs'
}

class App {
  constructor() {
    this.app = document.getElementById('main');
    // Creating Elements
    this.header = this.createElement('header');
    this.navigation = this.createElement('nav');
    this.mainWrapper = this.createElement('div')

    // Inserting into DOM
    this.app.append(this.header);
    this.header.append(this.navigation);
    this.navigation = this.renderNav();
    this.app.append(this.mainWrapper);

  }

  createElement(elementTag) {
    const element = document.createElement(elementTag);
    return element;
  }

  renderNav() {
    Object.keys(APP_ROUTES).forEach((route)=> {
      const a = this.createElement('a');
      a.innerHTML = route.toUpperCase();
      a.id = APP_ROUTES[route];
      a.href = `#`;
      this.navigation.append(a);
    })

    this.navigation.addEventListener('click', (e) => {
      if(e.target.tagName === 'A') {
        e.preventDefault();
        window.location.hash =  e.target.id;
      }
      this.hashChange();
    })

  }

  hashChange() {
    window.addEventListener('hashchange', (e) => {
      if(window.location.hash.slice(1) === 'about') {
          const element = document.createElement('div');
          this.mainWrapper.innerHTML = '';
          this.mainWrapper.append(element);
          element.innerHTML = 'ABOUT'
      }
      if(window.location.hash.slice(1) === 'testimonials') {
          const element = document.createElement('div');
          this.mainWrapper.innerHTML = '';
          this.mainWrapper.append(element);
          element.innerHTML = 'testimonials'
      }
      if(window.location.hash.slice(1) === 'buttons') {
          const element = document.createElement('div');
          this.mainWrapper.innerHTML = '';
          this.mainWrapper.append(element);
          this.getButtons(element)
      }
      if(window.location.hash.slice(1) === 'blocks') {
          const element = document.createElement('div');
          this.mainWrapper.innerHTML = '';
          this.mainWrapper.append(element);
          element.innerHTML = 'blocks'
      }
      if(window.location.hash.slice(1) === 'inputs') {
          const element = document.createElement('div');
          this.mainWrapper.innerHTML = '';
          this.mainWrapper.append(element);
          element.innerHTML = 'inputs'
      }
    })
  }

  async getButtons(element) {

      const response = await fetch('https://blooming-everglades-11675.herokuapp.com/buttons');
      const buttons = await response.json();
      const button1 = buttons[0];
      const button2 = buttons[1];
      const button3 = buttons[2];
      const realButton1 = this.createElement('button');
      realButton1.style.cssText = `
      background-color: ${button1['background-color']};
      height: ${button1.height};
      border-radius: ${button1['border-radius']}
      `;
      realButton1.innerHTML =  "secondary";
      element.append(realButton1);

  }
}

export default App;


// Lesson CODE <-------------------------------->
// const APP_ROUTES = {
//   news: 'news',
//   about: 'about',
//   contacts: 'contacts',
// };

// class App {
//   constructor(container) {
//     return this.init(container);
//   }

//   renderNavigation(container) {
//     const nav = document.createElement('nav');

//     Object.keys(APP_ROUTES).forEach((route) => {
//       const a = document.createElement('a');
//       a.innerHTML = route.toUpperCase();
//       a.href = '#';
//       a.id = APP_ROUTES[route];

//       nav.appendChild(a);
//     });

//     nav.addEventListener('click', (e) => {
//       if (e.target.tagName === 'A') {
//         e.preventDefault();
//         window.location.hash = e.target.id;
//       }
//       return;
//     });

//     container.appendChild(nav);
//   }

//   renderNewsBlock(container) {
//     const el = document.createElement('div');
//     el.appendChild(new Header());

//     container.appendChild(el);
//   }

//   renderAboutBlock(container) {
//     const el = document.createElement('div');
//     el.appendChild(new Card());

//     container.appendChild(el);
//   }


//   renderHomePage(container) {
//     const el = document.createElement('div');
//     el.innerHTML = 'HOME';

//     container.appendChild(el);
//   }

//   init(container) {
//     window.onhashchange = () => this.render(container);

//     observer.subscribe('ondatareceived', (state) => {
//       console.log(state);
//     });

//     return this.render(container);
//   }

//   render(container) {
//     const app = document.createElement('div');
//     this.renderNavigation(app);

//     switch (window.location.hash.slice(1)) {
//       case APP_ROUTES.news:
//         this.renderNewsBlock(app);
//         break;
//       case APP_ROUTES.about:
//         this.renderAboutBlock(app);
//         break;
//       default:
//         this.renderHomePage(app);
//     }

//     container.innerHTML = '';
//     container.appendChild(app);
//   }
// }

// export default App;

// 1. переопределить поведение внутренних ссылок навигации
// 2. подписаться на изменения адресной строки
// 3. в зависимости от URL - генерировать контент
