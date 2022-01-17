import React from "react";

import "./style.css";

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

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    let passwordArray = Array.from(this.state.password);

    const checkName = /^[A-Z]/.test(this.state.name);
    const checkPasswordNum = /[0-9]/g.test(this.state.password);
    const checkPasswordLet = /[a-zA-Z]/g.test(this.state.password);

    if (
      !this.state.name ||
      this.state.name.length < 3 ||
      this.state.name.length > 30 ||
      !checkName
    ) {
      nameError = "Name is Invalid";
    }

    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      emailError = "Email is Invalid";
    }

    if (
      !this.state.password ||
      passwordArray.length < 8 ||
      !checkPasswordNum ||
      !checkPasswordLet
    ) {
      passwordError = "Password is Invalid";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Form with validation</h1>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter your name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.nameError}</div>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="error">{this.state.emailError}</div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
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
