import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity } });
  };

  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default CartPage;
