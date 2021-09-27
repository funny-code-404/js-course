import React from "react";

import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: { name: "", email: "", password: "" },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length < 3 ? "Name must be 3 characters long!" : "";
        break;
      case "email":
        const validEmailRegex = RegExp(/\S+@\S+\.\S+/);
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        const validPasswordRegex = RegExp(
          /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[a-z]).*$/
        );
        errors.password = validPasswordRegex.test(value)
          ? ""
          : "Password must be 8 characters long!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.info(this.state);

    const validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
      return valid;
    };

    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <label className="form__label">Name:</label>
        <input
          className="form__input"
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={this.handleChange}
          noValidate
        />
        {errors.name.length > 0 && <span className="error">{errors.name}</span>}
        <label className="form__label">Email:</label>
        <input
          className="form__input"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={this.handleChange}
          noValidate
        />
        {errors.email.length > 0 && (
          <span className="error">{errors.email}</span>
        )}
        <label className="form__label">Password:</label>
        <input
          className="form__input"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={this.handleChange}
          noValidate
        />
        {errors.password.length > 0 && (
          <span className="error">{errors.password}</span>
        )}
        <button className="form__button" disabled={false}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
