import React from 'react';
import { shallow } from 'enzyme';
import Coins from './Coins';

const props = {
  coins: [
    {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      current_price: 41593,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      market_cap: 778357915130,
      market_cap_change_percentage_24h: -4.57821,
      max_supply: 21000000,
      price_change_24h: -1971.47108004,
      price_change_percentage_24h: -4.52542,
      total_supply: 21000000,
      total_volume: 141884973661,
    },
    {
      id: 'dogecoin',
      symbol: 'dgc',
      name: 'dogecoin',
      current_price: 415930,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      market_cap: 778357915130,
      market_cap_change_percentage_24h: -4.57821,
      max_supply: 21000000,
      price_change_24h: -1971.47108004,
      price_change_percentage_24h: -4.52542,
      total_supply: 21000000,
      total_volume: 141884973661,
    },
  ],
};

const setUp = props => shallow(<Coins {...props} />);

let component;

describe('Coins component', () => {
  describe('should render Coins component', () => {
    beforeEach(() => {
      component = setUp();
    });

    it('should render component correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('should contain .load', () => {
      const load = component.find('.load');
      expect(load.length).toBe(1);
    });
  });

  describe('should render Coins component with props', () => {
    beforeEach(() => {
      component = setUp(props);
    });

    it('should render .coins', () => {
      expect(component).toMatchSnapshot();
    });

    it('should contain .coins', () => {
      const coinsElem = component.find('.coins');
      expect(coinsElem).toHaveLength(1);
    });

    it('should contain 2 items in .coins__list', () => {
      const coinsElem = component.find('.coins__list Coin');
      expect(coinsElem).toHaveLength(2);
    });
  });
});
