import React from 'react';
import Coin from './Coin';

const Coins = ({ coins }) => {
  return (
    <div className='coins'>
      <div className="coins__row">
        <h3 className="coins__coin">Coin</h3>
        <h3 className="coins__price">Price</h3>
        <h3 className="coins__price-change24">24h change</h3>
      </div>
      {
        // coins.lenght > 0 &&
        coins.map(coin => (
          <Coin key={coin.id} coin={coin} />
        ))
      }
    </div>
  );
};

export default Coins;
