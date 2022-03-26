import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { auth } from "../../firebase";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  const currentUserAuth = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({ password: "", email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = () => {
    history.push("/signin");
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await auth.createUserWithEmailAndPassword(values.email, values.password);
    history.push("/");
  };

  return currentUserAuth ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={handleSubmit}>
      Sign Up <br /> email
      <input name="email" onChange={handleChange} />
      password
      <input name="password" onChange={handleChange} />
      <button>Click</button>
      <button onClick={handleClick}>SignIn</button>
    </form>
  );
};
