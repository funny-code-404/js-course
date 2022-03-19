import { useSelector } from 'react-redux';
import { isLoadingDetailsSelector } from '../../../ducks/details/selector';

const Loader = () => {
  const isLoading = useSelector(isLoadingDetailsSelector);
  return !!isLoading && <div>Data is loading...</div>;
};

export default Loader;
