import './PaymentForm.css';

const PaymentForm = ({render}) => {

    const registration = (
        <div>
            <input readOnly type= 'checkbox' checked style={{display: "block"}}/>
            <input type="text" placeholder='Фамлия'/>
            <input type="text" placeholder='Год рождения'/>
            <input type="text" placeholder='Номер телефона'/>
            <button>Зарегестрироваться</button>
        </div>
    )

    const entry = (
        <div>
            <input type= 'checkbox' readOnly checked />
            <label>Оставлять меня в системе</label>
            <button>Вход</button>
        </div>
    )

    const deleteAccount = (
        <div>
            <textarea defaultValue="Оставтье ваш отзыв"/>
            <div>
                <label htmlFor="">Оцените работу приложения</label>
                <input type= 'radio' id='1'/><label htmlFor="1">1</label>
                <input type= 'radio' id='2'/><label htmlFor="2">2</label>
                <input type= 'radio' id='3'/><label htmlFor="3">3</label>
                <input type= 'radio' id='4'/><label htmlFor="4">4</label>
                <input type= 'radio' id='5'/><label htmlFor="5">5</label>
            </div>
            <button>Отправить</button>
        </div>

    )

    const props = {
        form1: registration,
        form2: entry,
        form3: deleteAccount
    };

    return <div>
        <form action="#" className='formBorder'>
            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder='Емэйл'/>
            <input type="text" placeholder='Пароль'/>
            <div>{render(props)}</div>
        </form>
    </div>

}

export default PaymentForm