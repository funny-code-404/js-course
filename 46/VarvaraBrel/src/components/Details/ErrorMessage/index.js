import { useSelector } from 'react-redux';
import { errorDetailsSelector } from '../../../ducks/details/selector';

const ErrorMessage = () => {
  const error = useSelector(errorDetailsSelector);
  return !!error && <div>{'Error : ' + error.message}</div>;
};

export default ErrorMessage;
