import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async () => {
  const res = await axios.get(`${BASE_URL}/pokemon?limit=50`);
  const results = res.data.results;

  const detailedResults = await Promise.all(
    results.map(async (pokemon) => {
      const details = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        image: details.data.sprites.front_default, 
      };
    })
  );

  return detailedResults;
};


export const getPokemonDetails = async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
    const data = res.data;

    const image =
      data.sprites.other?.['official-artwork']?.front_default ||
      data.sprites.other?.dream_world?.front_default ||
      data.sprites.front_default ||
      "/placeholder.png";

    return {
      ...data,
      image, 
    };
  } catch (error) {
    console.error(`Failed to fetch details for Pokémon "${name}":`, error);
    return null;
  }
};


export const getPokemonTypes = async () => {
  const res = await axios.get(`${BASE_URL}/type`);
  return res.data.results;
};


export const getPokemonByName = async (name) => {
    try {
      const response = await axios.get(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokémon by name:", error);
      return null;
    }
  };
  
  export const getPokemonByType = async (type) => {
    try {
      const response = await axios.get(`${BASE_URL}/type/${type.toLowerCase()}`);
      return response.data.pokemon.map((p) => p.pokemon); // Extract Pokémon list
    } catch (error) {
      console.error("Error fetching Pokémon by type:", error);
      return [];
    }
  };

  export const getPokemonByAbility = async (ability) => {
    try {
      const response = await axios.get(`${BASE_URL}/ability/${ability.toLowerCase()}`);
      return response.data.pokemon.map((p) => p.pokemon); // Extract Pokémon list
    } catch (error) {
      console.error("Error fetching Pokémon by ability:", error);
      return [];
    }
  };