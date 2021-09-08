import React, { useState } from 'react'

const Form = (props) => {
  const [userName, setUserName] = useState('')
  const [email, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')
  const formSubmitHandler = (e) => {
    const userInfo = {
      userName,
      email,
      password,
    }
    e.preventDefault();
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    console.log('You submitted the form!', userInfo);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="username">
        Username
        <input
          type="text"
          id="username"
          placeholder="Enter your name please"
          minLength="3"
          maxLength="30"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          placeholder="Enter your email please"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={email}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          minLength="8"
          value={password}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
