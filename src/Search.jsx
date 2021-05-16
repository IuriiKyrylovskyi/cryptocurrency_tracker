import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <h1 className="text">Search a currency</h1>
      <form>
        <input type="text" placeholder="Search" className="input" />
      </form>
    </div>
  );
};

export default Search;
