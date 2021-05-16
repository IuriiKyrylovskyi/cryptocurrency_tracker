import React, { useState, useEffect } from 'react';
import { fetchCryptoList } from './gateway';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCryptoList().then(data => {
      setCoins(data);
    }).catch(error => new Error(console.log(error)));
  }, []);

  return (
    <div>
      <h1 className="1">API</h1>
    </div>
  );
};

export default App;
