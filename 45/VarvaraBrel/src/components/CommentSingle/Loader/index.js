import { useSelector } from 'react-redux';
import { singleCommentIsLoadingSelector as isLoadingSelector } from '../../../ducks/selectors';

const Loader = () => {
  const isLoading = useSelector(isLoadingSelector);
  return !!isLoading && <div>Data is loading...</div>;
};

export default Loader;
