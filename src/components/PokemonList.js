import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/PokemonList.css";

const PokemonList = (props) => {
  const pokemonItems = props.list.map((item, id) => {
    return (
      <li key={id}>
        <Pokemon item={item} />
      </li>
    );
  });

  return <ul className="pokemonList">{pokemonItems}</ul>;
};

export default PokemonList;
