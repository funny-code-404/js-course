import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { dataListSelector } from '../../ducks/list/selector';

import {
  ACTION_GET_POKEMON_LIST,
  ACTION_GET_POKEMON_IMAGES,
  ACTION_CHANGE_INPUT,
} from '../../redux/actions';

import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import PokemonList from './PokemonList';

const H1Styled = styled.h1`
  text-align: center;
  font-family: Helvetica;
  font-size: 50px;
`;

const InputDivStyled = styled.div`
  margin: auto;
  width: 500px;
  height: 100px;
  label {
    font-family: Helvetica;
    font-size: 24px;
  }
  input {
    width: 200px;
    padding: 10px;
    margin: 10px 20px;
  }
`;

const DivStyled = styled.div`
  width: 85%;
  margin: auto;
`;

const MainPage = ({
  actionGetData,
  pokemonList,
  actionGetImages,
  actionChangeInput,
}) => {
  useEffect(() => {
    actionGetData();
    actionGetImages();
  }, []);

  const handleChange = (e) => {
    actionChangeInput(e.target.value);
  };

  return (
    <div>
      <H1Styled>POKEMONS</H1Styled>
      <InputDivStyled>
        <label>Find your pokemon</label>
        <input onChange={handleChange} />
      </InputDivStyled>
      <Loader />
      <ErrorMessage />
      <DivStyled>
        {pokemonList.map((item) => (
          <PokemonList
            name={item.name}
            id={item.id}
            image={item.image}
            isDisabled={item.isDisabled}
            key={item.name}
          />
        ))}
      </DivStyled>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonList: dataListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetData: () => {
    dispatch(ACTION_GET_POKEMON_LIST());
  },
  actionGetImages: () => {
    dispatch(ACTION_GET_POKEMON_IMAGES());
  },
  actionChangeInput: (value) => {
    dispatch(ACTION_CHANGE_INPUT(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

MainPage.propTypes = {
  actionGetData: PropTypes.func.isRequired,
  actionGetImages: PropTypes.func.isRequired,
  actionChangeInput: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export { H1Styled };
