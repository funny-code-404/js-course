import { useState, useEffect } from "react";

const withDataFromServer = (Component) => {
  return (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getDogs();
    }, []);
    async function getDogs() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const dogs = await response.json();
      setData(dogs);
    }
    return <Component data={data} {...props} />;
  };
};

export default withDataFromServer;
