import { Component } from 'react';
import Navigation from './Navigation/Navigation';
import './header.css';


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { login: '', email: '', password: '' };
	}

	onSubmit = (event) => {
		alert(`${this.state.login}, добро пожаловать!, ваш EMail: ${this.state.email}, ваш пароль:${this.state.password}`);
		event.preventDefault();
	}

	onChangeEmail = (event) => {
		this.setState({ email: event.target.value });
	}

	onChangeLogin = (event) => {
		this.setState({ login: event.target.value });
	}

	onChangePassword = (event) => {
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<header className="header1">
				<Navigation />
				<div className="header-text">
					<p id="animated_div" className="header-axit">AX<span>IT</span></p>
					<p className="modern-axure">MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</p>
					<hr className="header-hr" />
					<p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean</p>
					<a className="semi-button" href="www">Download</a>
				</div>
				<div className="form-free-trial">

					<form className="guruweba-example-form" name="feedback" method="" action="" onSubmit={this.onSubmit}>
						<div className="guruweba-example-caption">Try Your <span >FREE</span> Trial Today</div>

						<label className="form-str-name">
							Name:
							<input type="text" name="name" minLength="3"
								maxLength="30" required="required" value={this.state.login} onChange={this.onChangeLogin} />
							<span className="validation">Валидация</span>
							<hr className="form-hr" />
						</label>

						<label className="form-str-name">
							Email:
							<input type="email" name="email" required="required" value={this.state.email} onChange={this.onChangeEmail} />
							<span className="validation">Валидация</span>
							<hr className="form-hr" />
						</label>

						<label className="form-str-name">
							Password:
							<input type="password" name="password" minLength="8" required="required" value={this.state.password}
								onChange={this.onChangePassword} />
							<span className="validation">Валидация</span>
							<hr className="form-hr" />
						</label>

						<input className="start-button" type="submit" name="submit_btn" value="Send" />
					</form>
				</div>
			</header>
		);
	}
}

export default Header;