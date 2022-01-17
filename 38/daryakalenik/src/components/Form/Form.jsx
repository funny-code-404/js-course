import React from "react";
import { FormErrors } from "./FormErrors";
import "./styles.css";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    formErrors: { name: "", email: "", password: "" },
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length >= 3 && value.length <= 30;
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;
      case "email":
        emailValid = value.includes(`@`) && value.includes(`.`);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid,
        emailValid,
        passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleClick = (e) => {
    e.preventDefault();
    const data = {};
    data.name = this.state.name;
    data.email = this.state.email;
    data.password = this.state.password;
    console.log(data);
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="form-wrapper">
        <form id="form" className="form">
          <div>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <input
            type="name"
            required
            name="name"
            className="form-item"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}
          />
          <input
            type="email"
            required
            className="form-item"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}
          />
          <input
            type="password"
            className="form-item"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}
          />

          <button
            type="submit"
            className="form-button"
            disabled={!this.state.formValid}
            onClick={this.handleClick}
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
