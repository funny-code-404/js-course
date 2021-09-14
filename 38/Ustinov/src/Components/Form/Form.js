import React, { useState } from 'react'
import './form.css'

const Form = () => {

  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

  const [nameValid, setNameValid] = useState (false)
  const [emailValid, setEmailValid] = useState (false)
  const [passwordValid, sePasswordValid] = useState (false)

  const [nameError, setNameError] = useState ('Имя не может быть пустым')
  const [emailError, setEmailError] = useState ('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState ('Пароль не может быть пустым')


  const nameHandler = (e) => {
    setName(e.target.value)
    const nr = /^[a-zA-Z ]+$/ ;
    if (!nr.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя')
    } else {
      setNameError('')
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else { 
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 30) {
      setPasswordError('Пароль должен быть длинеее 3 и меньше 30 символов')
      if(!e.target.value){
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }


  const blureHendler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameValid (true)
        break

      case 'email':
        setEmailValid (true)
        break

      case 'password' :
        sePasswordValid (true)
        break
    }
  }

   const submitHandler = (e) => {
    const FormLog = {
      name,
      email,
      password,
    }
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    console.log('Submit Form',FormLog);
  }


  return(
     <form className = 'form' onSubmit={submitHandler}>
          {(nameValid && nameError) && <div style={{color: 'red'}}>{nameError}</div>}

        <label >Имя: <input className='inName' onChange={e => nameHandler(e)} value = {name} onBlur={e => blureHendler(e)} name= 'name' type = 'text' placeholder = 'Enter your name...'/></label>

          {(emailValid && emailError) && <div style={{color: 'red'}}>{emailError}</div>}

        <label>Email: <input className='inEmail' onChange={e => emailHandler(e)} value = {email} onBlur={e => blureHendler(e)} name= 'email' type = 'text' placeholder = 'Enter your email...'/> </label>

          {(passwordValid && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}

        <label className='inPass'>Пароль: <input onChange={e => passwordHandler(e)} value = {password} onBlur={e => blureHendler(e)} name= 'password' type = 'password'/></label>

        <button className='btn' type='submit'>Регистрация</button>
      </form>
  )
}

export default Form;
