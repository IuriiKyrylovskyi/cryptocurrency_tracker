import React from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = {
  handleInput: PropTypes.func,
};

export default Search;
