import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, settypes] = useState([]);

  const trainerName = useSelector((store) => store.trainerName.name);

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );
  console.log(pokemonsByName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
  };

  const handleChangeType = (e) => {
    const url = e.target.value;
    axios
      .get(url)
      .then(({ data }) => {
        if (url.includes("type")) {
          //? Obtuvimos pokemons por tipo
          const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormat);
        } else {
          //? Obtuvimos todos los pokemons
          setAllPokemons(data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => settypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <header className="relative">
        <div className="h-14 bg-red-500 relative">
          <div className="absolute w-[250px] -bottom-2 left-2">
            <img src="/images/pokedex.png" alt="" />
          </div>
        </div>
        <div className="h-10 bg-black"></div>
        <div className="absolute right-0 -translate-x-[20%] bottom-4 z-20 h-[60%]">
          <img className="h-fulll" src="/images/pokeball.png" alt="" />
        </div>
      </header>
      <main>
        <p className="text-center p-4 flex-wrap">
          <b className="text-red-500">Welcome {trainerName}</b>, here can you find your favorite Pokemon
        </p>
        <form className="flex-wrap text-center " onSubmit={handleSubmit}>
          <div>
            <input className="border-2 p-1 gap-1"
              name="pokemonName"
              placeholder="Search Pokemon..."
              type="text"
            />
            <button className="p-1 w-48 font-semibold bg-red-500 hover:bg-red-700 hover:text-white transition-colors" >Search</button>
          </div>

          <select className="hover:bg-red-500 hover:text-white" onChange={handleChangeType}>
            <option className="" value="https://pokeapi.co/api/v2/pokemon?limit=1292">
              All Pokemons
            </option>
            {types.map((type) => (
              <option value={type.url} className="capitalize" key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>

        <PokemonList pokemons={pokemonsByName} />
      </main>
    </section>
  );
};
export default Pokedex;
