import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <nav>
        <Link to={'/names'}>Имена</Link>
        <Link to={'/phones'}>Телефоны</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default AppLayout;
