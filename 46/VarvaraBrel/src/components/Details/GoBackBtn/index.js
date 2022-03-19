import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: absolute;
  top: 40px;
  right: 50px;
  font-family: Helvetica;
  font-size: 16px;
  margin: auto 20px;
  width: 100px;
  height: 40px;
  border: 3px solid orange;
  &:hover {
    border: 3px solid blue;
    color: blue;
  }
`;

const GoBackBtn = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/');
  };

  return <ButtonStyled onClick={handleClick}>Go Back</ButtonStyled>;
};

export default GoBackBtn;
