import React from 'react';
import { shallow } from 'enzyme';
import Coin from './Coin';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const propsRed = {
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
};
const propsGreen = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  current_price: 41593,
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  market_cap: 778357915130,
  market_cap_change_percentage_24h: 4.57821,
  max_supply: 21000000,
  price_change_24h: -1971.47108004,
  price_change_percentage_24h: 4.52542,
  total_supply: 21000000,
  total_volume: 141884973661,
};

const setUp = props => shallow(<Coin coin={props} />);

let component;

describe('Coin component', () => {
  describe('should render Coin component with red color', () => {
    beforeEach(() => {
      component = setUp(propsRed);
    });

    it('should render component correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('should contain .coin wrapper', () => {
      const wrapper = component.find('.coin');

      expect(wrapper.length).toBe(1);
    });

    it('should render .coin__volume.red correctly', () => {
      const wrapper = component.find('.coin__volume.red');
      expect(wrapper.length).toBe(1);
    });

    it('should not render .coin__volume.green', () => {
      const wrapper = component.find('.coin__volume.green');
      expect(wrapper.length).toBe(0);
    });

    it('should render red arrow', () => {
      const wrapper = component.find(BsArrowDown);
      expect(wrapper).toHaveLength(1);
    });
  });

  describe('should render Coin component with green color', () => {
    beforeEach(() => {
      component = setUp(propsGreen);
    });

    it('should render component correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('should contain .coin wrapper', () => {
      const wrapper = component.find('.coin');

      expect(wrapper.length).toBe(1);
    });

    it('should render .coin__volume.green correctly', () => {
      const wrapper = component.find('.coin__volume.green');
      expect(wrapper.length).toBe(1);
    });

    it('should not render .coin__volume.red', () => {
      const wrapper = component.find('.coin__volume.red');
      expect(wrapper.length).toBe(0);
    });

    it('should render green arrow', () => {
      const wrapper = component.find(BsArrowUp);
      expect(wrapper).toHaveLength(1);
    });
  });
});
