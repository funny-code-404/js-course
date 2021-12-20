import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleClick = () => {
    const { name, email, password } = this.state;
    if (isValidForm(name, email, password)) {
      console.log(this.state);
      this.setState({
        name: "",
        email: "",
        password: "",
      });
    } else {
      return;
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          name="name"
          placeholder="user name"
          onChange={this.handleChange}
        />
        <input
          value={email}
          name="email"
          placeholder="user email"
          onChange={this.handleChange}
        />
        <input
          value={password}
          name="password"
          placeholder="user password"
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>Click</button>
      </form>
    );
  }
}

const isValidForm = (name, email, password) => {
  let userName;
  let userEmail;
  let userPassword;

  const isValidName = (name) => {
    userName = /[А-Я][а-я]*/.test(name);
  };
  isValidName(name);

  const isValidEmail = (email) => {
    userEmail =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        email
      );
  };
  isValidEmail(email);

  const isValidPassword = (password) => {
    userPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);
  };

  isValidPassword(password);

  return userPassword && userName && userEmail;
};
