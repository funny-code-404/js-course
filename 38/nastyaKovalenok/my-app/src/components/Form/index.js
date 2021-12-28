import {useState} from "react";
import './style.css'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isShow, setIsShow]  = useState(false)

    const isEmpty = (str) => str.trim().length === 0

    const validationInputName = (valueInput) => {
        if (valueInput[0] !== valueInput[0].toUpperCase()) {
            setErrorName('Имя должно начинаться с заглавной буквы');
        } else if (valueInput.length < 3 || valueInput.length > 30) {
            setErrorName('Имя должно быть не меньше 3 символов и не больше 30');
        } else setErrorName('');
    }

    const validationInputEmail = (value) => {
        const valueInput = [...value]
        if (!valueInput.includes('@') || !valueInput.includes('.')) {
            setErrorEmail('Емейл не содержит знака "@" или "."')
        } else setErrorEmail('')
    }

    const validationInputPassword = (valueInput) => {
        const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(valueInput)
        !reg ? setErrorPassword('Пароль должен содержать хотя бы одну букву и цифру и не меньше 8 символов')
            : setErrorPassword('')
    }

    const returnValues = () => {
        if (name !== '' && email !== '' && password !== ''){
            setIsShow(true)
        }
    }

    const handleChange = (e) => {
        const {value, name: nameInput} = e.target;
        switch (nameInput) {
            case 'name':
                setName(value);
                (!isEmpty(value))
                    ? validationInputName(value)
                    : setErrorName('');
                break;
            case 'email':
                setEmail(value);
                (!isEmpty(value))
                    ? validationInputEmail(value)
                    : setErrorEmail('');
                break;
            case 'password' :
                setPassword(value);
                (!isEmpty(value))
                    ? validationInputPassword(value)
                    : setErrorPassword('');
                break;
        }
    }

    return (
        <div>
            <form>
                <input type='text'
                       name='name'
                       placeholder='Имя'
                       value={name}
                       onChange={handleChange}
                       className={errorName && 'error'}/>
                <p>{errorName}</p>
                <input type='email'
                       name='email'
                       placeholder='Емайл'
                       value={email}
                       onChange={handleChange}
                       className={errorEmail && 'error'}/>
                <p>{errorEmail}</p>
                <input type='password'
                       name='password'
                       placeholder='Пароль'
                       onChange={handleChange}
                       value={password}
                       className={errorPassword && 'error'}/>
                <p>{errorPassword}</p>
                <button onClick={returnValues}>Отправить</button>
                {isShow && (
                    <div>
                        <div>имя: {name}</div>
                        <div>емейл: {email}</div>
                        <div>пароль: {password}</div>
                    </div>
                )}
            </form>
        </div>

    )
}


export default Form;
