import ResumeBlock from './components/Resume';
import JsProjectBlock from './components/JsProject';
import RequirementBlock from './components/Requirement';

const APP_ROUTES = {
  resume: 'resume',
  jsProject: 'jsProject',
  requirement: 'requirement',
};

class App {
  constructor(container) {
    return this.init(container); //через return мы возвращаем не this а тот объект, который мы возвращаем - возвращаем container от init, то есть срабатывает render(container)
  }

  renderNavigation(container) {
    const nav = document.createElement('nav'); //создаем тег nav
    nav.classList = 'navigationStyle';
    Object.keys(APP_ROUTES).forEach((route) => { //проходимся по каждому полю объекта
      const a = document.createElement('a'); //создаем ссылки
      a.classList = 'links';
      a.innerHTML = route.toUpperCase();
      a.href = '#';
      a.id = APP_ROUTES[route]; //id = значение поля объекта
      nav.appendChild(a); //добавляем ссылки в nav 
    });

    nav.addEventListener('click', (e) => { //при клике на эвент nav-а
      if (e.target.tagName === 'A') { //Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. Он отличается от Event.currentTarget, если обработчик события вызывается во время всплытия (bubbling) или захвата события.
        e.preventDefault(); //сбрасываем действия по умолчанию
        window.location.hash = e.target.id; //положение с помощью адресной строки
      } else {
        return;
      }
    });
    container.appendChild(nav); //в контейнер добавляем созданный nav
  }

  renderResumeBlock(container) {
    const resumes = new ResumeBlock(container);
  }

  renderJsProjectBlock(container) {
    const project = new JsProjectBlock(container);
  }

  renderRequirementBlock(container) {
    const req = new RequirementBlock(container);
  }

  init(container) {
    window.onhashchange = () => { //при изменении адресной строки
      this.render(container); //вызываем перерисовку DOM-а
    };
    return this.render(container);
  }

  render(container) {
    const el = document.createElement('div'); //создаем div
    this.renderNavigation(el); //кладем наш el в renderNavigation
    //сделать проверку на перерисовку
    switch (window.location.hash.slice(1)) { //ловим hash и обрезаем до первого элемента
      case APP_ROUTES.resume:
        this.renderResumeBlock(el);
        break;
      case APP_ROUTES.requirement:
        this.renderRequirementBlock(el);
        break;
      case APP_ROUTES.jsProject:
        this.renderJsProjectBlock(el);
        break;
      default:
    }
    container.innerHTML = ''; //удаляем прошлое содержание при перерисовке //innerHTML - радотает с гипер-текстом, возможность создавать и распознавать теги
    container.appendChild(el); //кладем наш div в контейнер 
  }
}

export default App; //экспорт по умолчанию можно импортировать с любым именем

//1. Мы создали new App и в него передали конфигурированный контейнер который мы из DOM-а документа с помощью id = main 
//2. Мы создаем функцию render которая отрисовывает сам контент
//3. Создаем функцию init, которая навешивает обработчики событий, а потом вызывает наш рендер
//4. Перераспределяем constructor, который возвращает возвращенный элемент