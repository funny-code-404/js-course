import { useSelector } from 'react-redux';
import { errorListSelector } from '../../../ducks/list/selector';

const ErrorMessage = () => {
  const error = useSelector(errorListSelector);
  return !!error && <div>{'Error : ' + error.message}</div>;
};

export default ErrorMessage;
