import React from 'react';

const Search = ({ handleInput }) => {
  return (
    <div className="search">
      <h1 className="text">Search a currency</h1>
      <form>
        <input type="text" placeholder="Search" className="input" onChange={handleInput} />
      </form>
    </div>
  );
};

export default Search;
