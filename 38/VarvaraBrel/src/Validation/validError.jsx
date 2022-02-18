import React from 'react';

class ValidError extends React.Component {
  validCheck = () => {
    const { name, value, isValid } = this.props;
    let valid = false;
    switch (name) {
      case 'name':
        valid = this.nameIsValid(value);
        break;
      case 'email':
        valid = this.emailIsValid(value);
        break;
      case 'password':
        valid = this.passwordIsValid(value, isValid);
        break;
    }
    this.validGlobalReturn(isValid, valid);
    return valid;
  };

  nameIsValid = (value) => {
    console.log(value[0]);
    return (
      value.length > 3 &&
      value.length < 30 &&
      value[0].toUpperCase() === value[0]
    );
  };

  emailIsValid = (value) => {
    return value.includes('@') && value.includes('.');
  };

  passwordIsValid = (value, isValid) => {
    const el = value.match(/[a-z0-9]/g);
    return value === ''
      ? isValid
      : value.length === el.length && value.length > 8;
  };

  validGlobalReturn(isValid, valid) {
    const { validGlobal, name } = this.props;
    if (isValid !== valid) {
      validGlobal(valid, name);
    }
  }

  render() {
    return (
      <div className="divInput">
        {!this.validCheck() && <p>Некорректные данные!</p>}
      </div>
    );
  }
}

export default ValidError;
