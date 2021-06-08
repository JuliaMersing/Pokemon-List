import React from "react";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.item.types.map((type, id) => {
      return <li key={id}> {type} </li>;
    });
  };
  return (
    <article className="pokemonCard">
      <img src={props.item.url} alt="pokemonImage" />
      <h2>{props.item.name}</h2>
      <ul>{renderTypes()}</ul>
    </article>
  );
};

export default Pokemon;
