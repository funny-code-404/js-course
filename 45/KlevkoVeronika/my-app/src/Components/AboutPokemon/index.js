import { getDataAboutPokemon } from './Hooks/getDataAboutPokemon';
import { getListWithAbilities } from './Hooks/getListWithAbilities';
import { getEggGroup } from './Hooks/getEggGroup';

export const AboutPokemon = () => {
  const [handleClick, state] = getDataAboutPokemon();
  console.log(state);

  return (
    <>
      <div className="detailed_info">
        <h2 className="name_pokemon">{state.name.toUpperCase()}</h2>
        <img className="foto_pokemon" src={state.src} />
        <div>
          Abilities:
          <ul>{getListWithAbilities(state)}</ul>
        </div>
        <div>
          Egg Groups:
          <ul>{getEggGroup(state)}</ul>
        </div>
        {/* <div>Gender ratio:</div> */}
        <div>Height: {state.weight} cm</div>
        <div>Weight: {state.height} kg</div>
        <div>Pokédex color: {state.color}</div>

        <button className="btn_back" onClick={handleClick}>
          Назад
        </button>
      </div>
    </>
  );
};
