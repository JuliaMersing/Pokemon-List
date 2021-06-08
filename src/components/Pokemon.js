import React from "react";
import "../stylesheet/Pokemon.css";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.item.types.map((type, id) => {
      return (
        <li className="pokemonCard_typesLi" key={id}>
          {" "}
          {type}{" "}
        </li>
      );
    });
  };
  return (
    <article className="pokemonCard">
      <img
        className="pokemonCard_img"
        src={props.item.url}
        alt="pokemonImage"
      />
      <h2 className="pokemonCard_title">{props.item.name}</h2>
      <ul className="pokemonCard_types">{renderTypes()}</ul>
    </article>
  );
};

export default Pokemon;
