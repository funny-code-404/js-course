import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEED,
  GET_DETAILS_FAILED,
} from './actions';

export const initialPokemonDetailsState = {
  data: {},
  error: null,
  isLoading: false,
};

export const pokemonDetailsReducer = (
  state = initialPokemonDetailsState,
  action
) => {
  switch (action.type) {
    case GET_DETAILS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: initialPokemonDetailsState.error,
      };
    case GET_DETAILS_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_DETAILS_FAILED:
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return { ...state };
  }
};
