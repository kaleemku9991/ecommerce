import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/Product/HomePage';

describe('HomePage Component', () => {
  it('should render without errors', () => {
    const component = shallow(<HomePage />);
    const wrapper = component.find('.product-list');
    expect(wrapper.length).toBe(1);
  });
});
