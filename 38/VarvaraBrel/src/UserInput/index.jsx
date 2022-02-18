import React from 'react';

class UserInput extends React.Component {
  onChange = (e) => {
    const { onInputChange, name } = this.props;
    onInputChange(e.target.value, name);
  };

  render() {
    const { name } = this.props;
    return <input placeholder={name} onChange={this.onChange} />;
  }
}

export default UserInput;
