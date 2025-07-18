import { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(search);
    setSearch(""); // Optionally clear input after search
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search restaurants..."
        value={search} // bind the input value to state
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;