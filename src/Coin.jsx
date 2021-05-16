import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const Coin = ({ coin }) => {
  const { image, name, symbol, current_price, price_change_percentage_24h } = coin;

  const diff = Math.abs(price_change_percentage_24h).toFixed(2);

  const colorClass =
    parseFloat(price_change_percentage_24h) > 0 ? 'coin__volume green' : 'coin__volume red';

  return (
    <div className="coin">
      <div className="coin__name">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin__symbol">{symbol}</p>
      </div>
      <div className="coin__data">
        <p className="coin__price">{current_price}</p>
        <p className={colorClass}>
          {parseFloat(price_change_percentage_24h) > 0 ? <BsArrowUp /> : <BsArrowDown />}
          {diff} %
        </p>
      </div>
    </div>
  );
};

export default Coin;
