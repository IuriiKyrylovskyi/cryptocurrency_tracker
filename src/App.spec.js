import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const setUp = () => shallow(<App />);

describe('should render App component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain .main wrapper', () => {
    const wrapper = component.find('.main');
    expect(wrapper.length).toBe(1);
  });
});
