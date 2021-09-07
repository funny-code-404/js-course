import './styles.scss';

import observer from '../../utils/observer';

class Form {
  constructor() {
    return this.render();
  }

  render() {
    const form = document.createElement('form');
    form.classList.add('form');
    form.innerHTML = 'FORM';

    return form;
  }
}

export default Form;
