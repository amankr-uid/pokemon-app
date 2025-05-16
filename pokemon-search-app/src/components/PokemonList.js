import PokemonCard from "./PokemonCard";
import { getPokemonList } from "@/lib/api";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemonList(data);
    };

    fetchData();
  }, []);


  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
        ))
      ) : (
        <p className="text-red-500">No result found</p>
      )}
    </div>
  );
};

export default PokemonList;
