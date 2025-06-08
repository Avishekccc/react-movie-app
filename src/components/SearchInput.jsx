const SearchInput = ({ searchInput, setSearchInput, setSearchKeyWord }) => {
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    setSearchKeyWord(searchInput);
    setSearchInput("");
  };

  return (
    <div className="search-container my-[30px] ">
      <div className="space-x-4">
        <input
          type="text"
          placeholder="Search for your favrioute Movie"
          name="searchInput"
          value={searchInput}
          onChange={handleInput}
        />
        <button
          className="
         bg-gray-800 hover:bg-gray-400 text-white p-4 rounded-md transition duration-300"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
