import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";
export const SignIn = () => {
  const currentUserAuth = useContext(AuthContext);

  const [values, setValues] = useState({ password: "", email: "" });

  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(values.email, values.password);
    history.push("/");
  };

  return currentUserAuth ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={handleSubmit}>
      Sign In
      <br /> email
      <input name="email" onChange={handleChange} />
      password
      <input name="password" onChange={handleChange} />
      <button>Click</button>
      <button
        onClick={() => {
          history.push("/signup");
        }}
      >
        SignUp
      </button>
    </form>
  );
};
