import React from 'react';

class UserInfo extends React.Component {
  render() {
    const { username, useremail, userpassword } = this.props;
    return (
      <div>
        <h3 className="user">Принято!</h3>
        <p className="user">Имя : {username}</p>
        <p className="user">Email : {useremail}</p>
        <p className="user">Пароль : {userpassword}</p>
      </div>
    );
  }
}

export default UserInfo;
