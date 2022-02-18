import withDataFromServer from "./hoc/withDataFromServer";

const DogPage = ({ data }) => {
  return (
    <div>
      <p>Doggo</p>
      <img src={data.message} />
    </div>
  );
};

export default withDataFromServer(DogPage);
