import React, { useState, useEffect } from 'react';
import { fetchCryptoList } from './gateway';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCryptoList()
      .then(data => {
        setCoins(data);
      })
      .catch(error => new Error(error));
  }, []);

  return (
    <div>
      <div className="search">
        <h1 className="text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="input" />
        </form>
      </div>
    </div>
  );
};

export default App;
