import { useState, useEffect } from 'react';

const withUserData = (MyComponent) => {
  const user = {
    name: 'Steven',
    email: 'star123@gmail.com',
    password: '12345',
  };

  return (props) => {
    return <MyComponent user={user} {...props} />;
  };
};

const Form = (props) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = data;

  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  useEffect(() => {
    setData(props.user);
  }, []);

  return (
    <form>
      <input name="name" value={name} onChange={handleChange} />
      <input name="email" value={email} onChange={handleChange} />
      <input name="password" value={password} onChange={handleChange} />
    </form>
  );
};

export default withUserData(Form);
