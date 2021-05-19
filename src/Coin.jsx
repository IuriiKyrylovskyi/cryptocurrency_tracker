import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Coin = ({ coin }) => {
  const { image, name, symbol, current_price, price_change_percentage_24h, total_volume } = coin;

  const diff = Math.abs(price_change_percentage_24h).toFixed(2);

  const colorClass =
    parseFloat(price_change_percentage_24h) > 0 ? 'coin__volume green' : 'coin__volume red';

  const coinVolumeInMillions = parseInt(total_volume / 1000000).toLocaleString();
  const price = current_price.toLocaleString();

  return (
    <div className="coin">
      <div className="coin__name">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin__symbol">{symbol}</p>
      </div>
      <div className="coin__volume">$ {coinVolumeInMillions} M </div>
      <div className="coin__data">
        <p className="coin__price">$ {price}</p>
        <p className={colorClass}>
          {parseFloat(price_change_percentage_24h) > 0 ? <BsArrowUp /> : <BsArrowDown />}
          {diff} %
        </p>
      </div>
    </div>
  );
};

Coin.propTypes = {
  coins: PropTypes.array,
  image: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  current_price: PropTypes.number,
  price_change_percentage_24h: PropTypes.number,
};

export default Coin;
