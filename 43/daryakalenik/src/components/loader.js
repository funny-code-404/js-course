import { useSelector } from "react-redux";

const Loader = () => {
  const isCommentsLoading = useSelector((store) => {
    return store.data.isLoading;
  });

  return !!isCommentsLoading && <div>LOADING</div>;
};

export default Loader;
