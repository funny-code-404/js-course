import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataDetailsSelector } from '../../ducks/details/selector';
import { ACTION_GET_POKEMON_DETAILS } from '../../redux/actions';

import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import GoBackBtn from './GoBackBtn';
import DetailsContent from './DetailContent';

const Details = ({ actionGetDetails, pokemonDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    actionGetDetails(id);
  }, []);

  return (
    <div>
      <Loader />
      <ErrorMessage />
      {Object.keys(pokemonDetails).length !== 0 && (
        <div>
          <GoBackBtn />
          <DetailsContent
            name={pokemonDetails.name}
            abilities={pokemonDetails.abilities}
            types={pokemonDetails.types}
            moves={pokemonDetails.moves}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonDetails: dataDetailsSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  actionGetDetails: (id) => {
    dispatch(ACTION_GET_POKEMON_DETAILS(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

Details.propTypes = {
  actionGetDetails: PropTypes.func.isRequired,
  pokemonDetails: PropTypes.object.isRequired,
};
