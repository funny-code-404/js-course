import { Component } from 'react'
import { FormErrors } from './FormErrors.jsx'
import './styles.css'

export class Form extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    formErrors: { name: '', email: '', password: '' },
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  }

  handleUserInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField(fieldName, value) {
    let { nameValid, emailValid, passwordValid } = this.state
    let fieldValidationErrors = this.state.formErrors

    switch (fieldName) {
      case 'name':
        nameValid = value.length >= 3 && value[0] === value[0].toUpperCase()
        fieldValidationErrors.name = nameValid
          ? ''
          : ' not with upper case or is too short'
        break
      case 'email':
        emailValid = value.includes('@')
        fieldValidationErrors.email = emailValid ? '' : ' should include @'
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid ? '' : ' is too short'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm,
    )
  }

  validateForm() {
    let { nameValid, emailValid, passwordValid } = this.state
    this.setState({
      formValid: nameValid && emailValid && passwordValid,
    })
  }

  render() {
    const { name, email, password, formErrors, formValid } = this.state
    return (
      <form className="form">
        <div>
          <FormErrors formErrors={formErrors} />
        </div>
        <input
          type="text"
          required
          name="name"
          placeholder="Name"
          value={name}
          className={this.state.formErrors.name}
          onChange={this.handleUserInput}
        />

        <input
          type="email"
          required
          name="email"
          placeholder="Email"
          value={email}
          className={this.state.formErrors.email}
          onChange={this.handleUserInput}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          className={this.state.formErrors.password}
          onChange={this.handleUserInput}
        />

        <button type="submit" className="btn" disabled={!formValid}>
          Sign up
        </button>
      </form>
    )
  }
}

export default Form
