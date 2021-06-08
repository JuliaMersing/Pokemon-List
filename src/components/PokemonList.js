import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const pokemonItems = props.list.map((item, id) => {
    return (
      <li key={id}>
        <Pokemon item={item} />
      </li>
    );
  });

  return <ul>{pokemonItems}</ul>;
};

export default PokemonList;
