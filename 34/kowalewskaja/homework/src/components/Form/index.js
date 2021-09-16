import Card from '../drowCalendar'

class Form {
  constructor() {
    
      return this.render();
  }

  render() {
      const form = document.createElement('form');
      form.appendChild(new Card("form", "formtext"));




      
      return form;
  }
}

export default Form;
