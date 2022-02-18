const withData = (Component) => {
  const userExample = {
    name: "Steven",
    email: "star123@gmail.com",
    password: "12345",
  };

  return (props) => {
    return <Component user={userExample} {...props} />;
  };
};

export default withData;
