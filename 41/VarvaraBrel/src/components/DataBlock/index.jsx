import { useState, useEffect } from 'react';

const withData = (MyComponent) => {
  return (props) => {
    const [dataFromServer, setData] = useState([]);

    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then((data) => data.json())
        .then((data) => Object.keys(data.message))
        .then((data) => setData(data));
    }, []);

    return <MyComponent data={dataFromServer} {...props} />;
  };
};

const DataBlock = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default withData(DataBlock);
