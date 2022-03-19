import { useSelector } from 'react-redux';
import { errorSelector } from '../../../ducks/selectors';

const ErrorMessage = () => {
  const error = useSelector(errorSelector);
  return !!error && <div>{'Error : ' + error.message}</div>;
};

export default ErrorMessage;
