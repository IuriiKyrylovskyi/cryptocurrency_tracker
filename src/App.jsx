import React, { useState, useEffect } from 'react';
import { fetchCryptoList } from './gateway';
import Coins from './Coins';
import Search from './Search';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCryptoList()
      .then(data => {
        setCoins(data);
      })
      .catch(error => new Error(error));
  }, []);

  console.log(coins);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div className="main">
      <Search search={search} handleInput={handleChange} />
      <Coins coins={filteredCoins} />
    </div>
  );
};

export default App;
