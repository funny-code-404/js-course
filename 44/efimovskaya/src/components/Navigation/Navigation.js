import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to='/posts'>Posts</Link>
      <Link to='/comments'>Info</Link>
    </nav>
  );
};

export default Navigation;
