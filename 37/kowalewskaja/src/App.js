import { Component } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
//import TextBlock from "./components/TextBlock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          menu={[
            "О компании",
            "Портфолио",
            "Команда",
            "Как мы работаем",
            "Отзывы клиентов",
            "Оставить заявку",
            "+7 (981) 857-46-24"
          ]}
          titles ={{
            title: 'Поможем сделать вашу квартиру уютнее',
            subtitle:'Подбираем текстиль, мебель и аксессуары под ваш интерьер, находим магазины и помогаем организовать доставку'
          }}
         
        />

        <Sidebar isValid={false} />
        <Main mainText ={{
            title: 'О нас',
            subtitle_first:'Премиальный европейский текстиль — одно из самых главных направлений работы коллектива. Создавать неповторимые интерьеры для наших дорогих клиентов, уделяя внимание мельчайшим деталям — вот то, что по-настоящему вдохновляет дизайнеров нашей студии.',
            subtitle_second:' Наш коллектив сделает все, чтобы после сотрудничества с нами, Вам было приятно сказать: « Да! Это именно то, что действительно достойно моего дома!»'
          }}/>

        <Footer />
      </div>
    );
  }
}
export default App;

/* <div className="App">
      <header className="App-header">
   hello
      </header>
    </div>
    
    <label htmlFor="email">Email</label>
        <input id="email" />*/
