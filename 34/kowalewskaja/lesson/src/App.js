import Card from "./components/Card";
import Form from "./components/Form";

class App {
  constructor(container) {
      return this.render(container);
  }
  //container.appendChild(new Card("tje", "text"));
  //container.appendChild(new Form());

  createHeader(text) {
      const Header = document.createElement('header');
      Header.innerHTML = text;

      return Header;
  };
  createMain(text) {
    const Main = document.createElement('main');
    Main.innerHTML = text;

    return Main;
};
createFooter(text) {
    const Footer = document.createElement('footer');
    Footer.innerHTML = text;

    return Footer;
};

createCard(text){
return new Card(text);
}

  render(container) {
      const app = document.createElement('div');
      app.appendChild(this.createHeader('HEADER'));
      app.appendChild(this.createMain('MAIN'));
      app.appendChild(this.createFooter('FOOTER'));
      app.appendChild(this.createCard('CARD'));

      container.appendChild(app);
  }
}
export default App;
