import React from 'react';

const Form = props =>

	<form action="">
		<input type="text" placeholder="Имя" /><br />
		<input type="email" placeholder="Email" /><br />
		<input type="password" placeholder="Пароль" />
		{props.extraProps}
	</form>


export default Form;
