import { useSelector } from 'react-redux';
import { isLoadingListSelector } from '../../../ducks/list/selector';

const Loader = () => {
  const isLoading = useSelector(isLoadingListSelector);
  return !!isLoading && <div>Data is loading...</div>;
};

export default Loader;
