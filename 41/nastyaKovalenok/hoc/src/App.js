
import DataBlock from "./components/DataBlock/DataBlock";
import Form from "./components/Form/Form";
import DogList from "./components/DogList/DogList";
import PaymentForm from "./components/PaymentForm/PaymentForm";

function App() {
  return (
    <div className="App">
      <DataBlock />
        <Form />
      <PaymentForm render={(props) => {
        return <div>
          <h4>Регистрация</h4>
          <div>{props.form1}</div>
        </div>
      }} />
        <PaymentForm render={(props) => {
            return <div>
                <h4>Вход</h4>
                <div>{props.form2}</div>
            </div>
        }} />
        <PaymentForm render={(props) => {
            return <div>
                <h4>Удаление аккаунта</h4>
                <div>{props.form3}</div>
            </div>
        }} />
        <DogList />
    </div>
  );
}

export default App;
