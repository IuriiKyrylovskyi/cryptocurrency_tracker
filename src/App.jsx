import React, { useState, useEffect } from 'react';
import { fetchCryptoList } from './gateway';
import Coin from './Coin';
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
      {
        // coins.lenght > 0 &&
        coins.map(coin => (
          <Coin key={coin.id} coin={coin} />
        ))
      }
    </div>
  );
};

export default App;
