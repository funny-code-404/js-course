import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Home/Form';
import Navigation from './components/Navigation/Navigation';



function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path='/' exact
					render={() => {
						return (
							<div>
								<h2>Home page</h2>
							</div>
						);
					}} />

				<Route path='/login' exact
					render={(props) => (
						<Form {...props} extraProps={<div>
							<legend>Вход</legend>

							<label htmlFor="isLogin">
								Оставлять меня в системе
								<input type="checkbox" name="" id="isLogin" checked />
							</label>

							<button type="submit">Войти</button>
						</div>} />
					)} />

				<Route path='/registration' exact
					render={(props) => (
						<Form {...props} extraProps={<div>
							<legend>Регистрация</legend>
							<input type="checkbox" checked />
							<input type="text" placeholder="Фамилия" />
							<input type="date" placeholder="Год Рождения" />
							<input type="text" placeholder="Номер телефона" />
							<button type="submit">Зарегистрироваться</button>
						</div>} />
					)} />

				<Route path='/feedback' exact
					render={(props) => (
						<Form {...props} extraProps={<div>
							<legend>Удаление аккаунта</legend>
							<textarea placeholder="Оставьте ваш отзыв" />
							<label htmlFor="1">
								1
								<input type="checkbox" name="" id="1" />
							</label>
							<label htmlFor="2">
								2
								<input type="checkbox" name="" id="2" />
							</label>
							<label htmlFor="3">
								3
								<input type="checkbox" name="" id="3" />
							</label>
							<label htmlFor="4">
								4
								<input type="checkbox" name="" id="4" />
							</label>
							<label htmlFor="5">
								5
								<input type="checkbox" name="" id="5" />
							</label>
							<button type="submit">Войти</button>
						</div>} />
					)} />

			</Switch>
		</Router>
	);
}

export default App;
