import { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Search restaurants..."
        className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md"
      />
    </div>
  );
};

export default Search;
