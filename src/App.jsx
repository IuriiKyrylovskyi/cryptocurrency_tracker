import React, { useState, useEffect } from 'react';
import { fetchCryptoList } from './gateway';
import Coins from './components/coins/Coins';
import Search from './components/search/Search';

const FETCH_INTERVAL = 10000;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = () =>
    fetchCryptoList()
      .then(data => {
        setCoins(data);
      })
      .catch(error => new Error(error));

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => fetchData(), FETCH_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );
  
  return (
    <div className="main">
      <Search handleInput={handleChange} />
      <Coins coins={filteredCoins} />
    </div>
  );
};

export default App;
