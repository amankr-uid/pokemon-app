import { useEffect, useState } from 'react';

export const usePokemonTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      setTypes(data.results);
    };

    fetchTypes();
  }, []);

  return types;
};