import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
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
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      navigate("/");
    } catch (e: any) {
      console.dir(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
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
      <button>Sign Up</button>
      <Link to="/signin">Sign in</Link>
    </form>
  );
};
