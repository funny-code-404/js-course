import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/registration">Регистрация</Link>
      <Link to="/login">Вход</Link>
      <Link to="/evaluation">Оценка пользователя</Link>
    </nav>
  );
};

export default Navigation;
