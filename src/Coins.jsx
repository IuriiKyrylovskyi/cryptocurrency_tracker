import React from 'react';
import Coin from './Coin';
import { AiOutlineReload } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Coins = ({ coins }) => {
  if (coins.length === 0) {
    return (
      <div className="load">
        <AiOutlineReload className="load-icon" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="coins">
      <div className="coins__row">
        <h3 className="coins__coin">Coin</h3>
        <h3 className="coins__volume">Volume</h3>
        <h3 className="coins__price">Price</h3>
        <h3 className="coins__price-change24">24h change</h3>
      </div>
      {coins.map(coin => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

Coins.propTypes = {
  coins: PropTypes.array,
};

export default Coins;
