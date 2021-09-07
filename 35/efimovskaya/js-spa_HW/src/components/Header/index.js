import Card from '../Card';

class Header {
  constructor() {
    return this.render();
  }

  render() {
    const header = document.createElement('header');

    header.innerHTML = 'HEADER';

    return header;
  }
}

export default Header;
