import React, { useState, useEffect } from 'react';
import { fetchCryptoList } from './gateway';
import Coins from './Coins';
import Search from './Search';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCryptoList()
      .then(data => {
        setCoins(data);
      })
      .catch(error => new Error(error));
  }, []);

  console.log(coins);

  return (
    <div className="main">
      <Search />
      <Coins coins={coins} />
    </div>
  );
};

export default App;
