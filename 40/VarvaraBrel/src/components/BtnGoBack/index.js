import { Link, useNavigate } from 'react-router-dom';

const GoBackBtn = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return <button onClick={handleBack}>Go Back</button>;
};
export default GoBackBtn;
