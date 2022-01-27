import PhoneColumn from "../PhoneColumn/PhoneColumn";
import NameColumn from "../NameColumn/NameColumn";
import classes from './HomePage.module.css'

const HomePage = () => {


    return (
        <div className={classes.Container}>
            <PhoneColumn/>
            <NameColumn/>
        </div>
    )
}

export default HomePage