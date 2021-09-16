import { Component } from "react";
import './index.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            nameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handleClick = (e) => {
        e.preventDefault();

        let result = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.state.formValid? console.log(result) : console.log("Form is not valid");
    }

    handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value}, 
            () => {this.validateField(name, value)} );
    }

    validateField = (fieldName, value) => {
        let nameValid = this.state.nameValid;
        let  emailValid = this.state.emailValid;
        let  passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case "name": nameValid = /^\p{Lu}/gu.test(value);
            break;
            case "email": emailValid = /@+/g.test(value);
            break;
            case "password": passwordValid = /[a-zA-Z]{8}/g.test(value);
            break;
            default: 
            break;
        }

        this.setState({
            nameValid: nameValid,
            emailValid: emailValid,
            passwordValid: passwordValid
          }, this.validateForm);
    }

    validateForm = () => {
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid});
    }

    render() {
        return(
            <form>
                <input onChange={(event) => this.handleUserInput(event)} type="text" name="name" placeholder="Имя"></input>
                <input onChange={(event) => this.handleUserInput(event)} type="email" name="email" placeholder="Email"></input>
                <input onChange={(event) => this.handleUserInput(event)} type="password" name="password" placeholder="Пароль"></input>
                <button onClick={this.handleClick}>Отправить</button>
            </form>
        );
    }
}

export default Form;