import {useEffect, useState} from 'react';

export const useListPokemon = () => {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => response.json())
      .then(data => setListPokemon(data.results))
      .catch(error => console.error(error));
  }, []);

  return listPokemon;
};
