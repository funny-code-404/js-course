import { useSelector } from "react-redux";

const ErrorMessage = () => {
  const errors = useSelector((store) => {
    return store.data.error;
  });
  console.log(errors);
  return !!errors && <div>{errors}</div>;
};

export default ErrorMessage;
