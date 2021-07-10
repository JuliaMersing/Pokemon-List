import React from "react";
import "../stylesheet/App.css";
import data from "../data/data.json";
import PokemonList from "./PokemonList";

const App = () => {
  return (
    <div class="pokemonWrapper">
      <h1 className="title"> Mi lista de pokemon</h1>
      <PokemonList list={data} />
    </div>
  );
};

export default App;
