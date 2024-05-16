import React from 'react';
import { shallow } from 'enzyme';
import CartPage from '../../components/Cart/CartPage';
import { CartContext } from '../../context/CartContext';

describe('CartPage Component', () => {
  const cart = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, quantity: 2, image: 'image2.jpg' }
  ];

  const dispatch = jest.fn();

  it('should render cart items', () => {
    const component = shallow(
      <CartContext.Provider value={{ cart, dispatch }}>
        <CartPage />
      </CartContext.Provider>
    );
    const items = component.find('.cart-item');
    expect(items.length).toBe(2);
  });

  it('should display total price', () => {
    const component = shallow(
      <CartContext.Provider value={{ cart, dispatch }}>
        <CartPage />
      </CartContext.Provider>
    );
    const total = component.find('p').last().text();
    expect(total).toBe('Total: $500');
  });
});
