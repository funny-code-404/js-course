import { useState } from "react";
import withData from "./hoc/withData";

const Form = ({ user }) => {
  const [data, setData] = useState(user);

  const handleChange = (e) =>
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        defaultValue={data.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        defaultValue={data.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        defaultValue={data.password}
        onChange={handleChange}
      />
      <label>Don't remember me</label>
      <input type="checkbox" defaultChecked={true} />
      <button>Log in</button>
    </form>
  );
};

export default withData(Form);
