import Link from "next/link";

const PokemonCard = ({ name, image }) => {
  return (
    <div className="border rounded-lg shadow-lg text-center bg-white">
      <img src={image} alt={name} className="w-[150px] h-[auto] mx-auto mb-2 object-cover" />

      <div className="p-4 bg-gray-200 rounded-b-lg">
        <h3 className="text-xl font-semibold text-gray-950 pb-4 capitalize">{name}</h3>
        <Link href={`/pokemon/${name}`} className="text-blue-500">
          Details →
        </Link>
      </div>
      
    </div>
  );
};

export default PokemonCard;
