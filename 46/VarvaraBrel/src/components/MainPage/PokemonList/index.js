import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  float: left;
  width: 13%;
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-family: Helvetica;
  background: #abcdef;
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 5px 15px;
  text-decoration: none;
  border: 1px solid #333;
  margin-bottom: 25px;
  &:hover {
    background-color: #034f84;
    color: white;
  }
`;

const PokemonList = ({ name, id, image, isDisabled }) => {
  return (
    <>
      {isDisabled || (
        <Card>
          <img src={image} />
          <h3>{name}</h3>
          <div>
            <LinkStyled to={`/${id}`}>Details</LinkStyled>
          </div>
        </Card>
      )}
    </>
  );
};

export default PokemonList;

PokemonList.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  isDisabled: PropTypes.bool,
  image: PropTypes.string,
  id: PropTypes.number,
};
