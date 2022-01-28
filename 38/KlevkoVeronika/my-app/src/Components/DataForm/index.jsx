import React from 'react';
import './style.css';

class DataForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: '',
    email: '',
    password: '',
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  };

  handleClick = (e) => {
    // при нажатии на BUTTON - выводит данные если formValid true
    const { name, email, password, formValid } = this.state;
    const data = { name, email, password };
    formValid ? console.log(data) : console.log('Data is not valid');
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(
      (prevState) => ({
        ...prevState,
        [name]: value,
      }),
      this.validName(name, value)
    );
  };

  validName = (inputName, value) => {
    let { nameValid, emailValid, passwordValid } = this.state;

    switch (inputName) {
      case 'name':
        nameValid = /\p{L}{3,30}/gu.test(value);
        break;
      case 'email':
        emailValid = /^\S+[-.\w]+@([\w-]+\.)+[\w-]+/g.test(value);
        break;
      case 'password':
        passwordValid = /\w{8}/g.test(value);
        break;
      default:
        break;
    }

    this.setState(
      (prevState) => ({
        ...prevState,
        nameValid,
        emailValid,
        passwordValid,
      }),
      () => this.isValidForm()
    );
  };

  notValidationWord = (titleProps, inputName) => {
    // const { title } = this.props;
    if (inputName === false) {
      return <p className="validation">{titleProps}</p>;
    }
  };

  isValidForm = () => {
    const { nameValid, emailValid, passwordValid } = this.state;
    this.setState({ formValid: nameValid && emailValid && passwordValid });
  };

  render() {
    const { name, email, password } = this.state;
    const { nameValid, emailValid, passwordValid } = this.state;
    const { title } = this.props;
    return (
      <form className="form">
        <div className="list_forms">
          <input
            id="name"
            name="name"
            value={name}
            placeholder="Имя"
            onChange={this.handleChange}
            required
            minLength={3}
            maxLength={30}
          />
          {this.notValidationWord(title, nameValid)}

          <input
            id="email"
            name="email"
            value={email}
            placeholder="Емайл"
            // type={email}
            onChange={this.handleChange}
          />
          {this.notValidationWord(title, emailValid)}

          <input
            id="password"
            name="password"
            value={password}
            placeholder="Пароль"
            onChange={this.handleChange}
          />
          {this.notValidationWord(title, passwordValid)}

          <button id="btn" onClick={this.handleClick}>
            Отправить
          </button>
        </div>
      </form>
    );
  }
}

export default DataForm;
