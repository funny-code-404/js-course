import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/numbers"></Link>
    </nav>
  );
};

export default Navigation;
