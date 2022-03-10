import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H1Styled } from '../../MainPage';

const H3Styled = styled.h3`
  margin: 20px 50px;
  font-family: Helvetica;
  font-size: 24px;
`;

const UlStyled = styled.ul`
  text-align: left;
  font-family: Helvetica;
  li {
    display: inline-block;
    margin: 10px 10px;
    width: 150px;
    border: 6px solid blue;
    padding: 9px;
  }
`;

const DetailsContent = ({ name, abilities, types, moves }) => {
  return (
    <div>
      <H1Styled>{name}</H1Styled>
      <H3Styled>ABILITIES</H3Styled>
      <UlStyled>
        {abilities.map((item) => (
          <li key={item.ability.name}>{item.ability.name}</li>
        ))}
      </UlStyled>
      <H3Styled>TYPES</H3Styled>
      <UlStyled>
        {types.map((item) => (
          <li key={item.type.name}>{item.type.name}</li>
        ))}
      </UlStyled>
      <H3Styled>MOVES</H3Styled>
      <UlStyled>
        {moves.map((item) => (
          <li key={item.move.name}>{item.move.name}</li>
        ))}
      </UlStyled>
    </div>
  );
};

export default DetailsContent;

DetailsContent.propTypes = {
  name: PropTypes.string.isRequired,
  abilities: PropTypes.array.isRequired,
  moves: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
};
