import { useState } from "react";

const SearchBar = ({ onSearch, onTypeChange, searchType }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex gap-2">

      <select
        className="border p-2 rounded bg-amber-100 text-gray-900"
        value={searchType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="all">Select</option>
        <option value="name">Name</option>
        <option value="type">Type</option>
        <option value="ability">Ability</option>
      </select>

      <input
        type="text"
        className="border p-2 rounded flex-grow bg-amber-100 text-gray-900"
        placeholder={`Search Pokémon by ${searchType}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch} className="bg-blue-600 text-white p-2 rounded cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
