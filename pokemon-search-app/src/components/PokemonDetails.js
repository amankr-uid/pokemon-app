import Image from "next/image";

const PokemonDetails = ({ pokemon }) => {
  if (!pokemon) return <p>Loading...</p>; 

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md">

      <div className="bg-sky-600 p-6 text-center rounded-tl-lg rounded-tr-lg">
        <img
          src={pokemon.image}
          alt={pokemon.name || "Unknown Pokémon"}
        />
      </div>

      <div className="bg-yellow-500 p-4 text-gray-950 rounded-br-lg rounded-bl-lg">
        <p><strong>Name:</strong> {pokemon.name}</p>
        <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Stats:</strong> {pokemon.stats.map(s => s.stat.name).join(", ")}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
        <p><strong>Some Moves:</strong> {pokemon.moves.slice(0, 5).map(m => m.move.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
