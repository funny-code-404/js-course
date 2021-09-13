import React from "react";

import "./styles.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    let passwordArray = Array.from(this.state.password);

    const checkNameOnFirstLetterUppercase = /^[A-Z]/.test(this.state.name);
    const checkPasswordOnDigit = /[0-9]/g.test(this.state.password);
    const checkPasswordOnLetters = /[a-zA-Z]/g.test(this.state.password);

    if (
      !this.state.name ||
      this.state.name.length < 3 ||
      this.state.name.length > 30 ||
      !checkNameOnFirstLetterUppercase
    ) {
      nameError = "Name is Invalid";
    }

    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      emailError = "Invalid email";
    }

    console.log(Array.from(this.state.password).length);

    if (
      !this.state.password ||
      passwordArray.length < 8 ||
      !checkPasswordOnDigit ||
      !checkPasswordOnLetters
    ) {
      passwordError = "Invalid password";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter your name..."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.nameError}</div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your email ..."
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.emailError}</div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <div className="error">{this.state.passwordError}</div>
        </div>
        <button type="submit"> Send </button>
      </form>
    );
  }
}

export default Form;
