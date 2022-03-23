import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

export const SignIn = () => {
  const [data, setData] = useState({ email: ``, password: `` });
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent & { target: { name: string; value: string } }
  ) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      navigate("/");
    } catch (e: any) {
      console.dir(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <input
        name="email"
        placeholder="email"
        type="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <button>Sign In</button>
      <Link to="/signup">Sign up</Link>
    </form>
  );
};
