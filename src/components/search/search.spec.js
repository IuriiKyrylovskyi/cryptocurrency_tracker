import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  it('should render Search component', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  describe('defaultProps', () => {
    it('should use default onChange', () => {
      const result = Search.defaultProps.handleInput();
      expect(result).toBe(undefined);
    });
  });
});
