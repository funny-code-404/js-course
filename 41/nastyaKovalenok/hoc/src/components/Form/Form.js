import {useState} from "react";
import {withUser} from "../../hoc/withUser";

const Form = ( {user} ) => {

    const [data, setData] = useState(user)

    const handlerChange = (e) =>
        setData((prev => ({
            ...prev,
            [e.target.name]: e.target.value
        })))

    const {name, email, password} = data

    return <form>
        <input name='name' value={name} onChange={handlerChange}/>
        <input name='email' value={email} onChange={handlerChange}/>
        <input name='password' value={password} onChange={handlerChange}/>
    </form>
}

export default withUser(Form)
