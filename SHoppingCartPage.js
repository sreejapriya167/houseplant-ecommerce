// src/components/ShoppingCartPage.js
import React, { useState } from 'react';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cart, updateCart, removeFromCart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="shopping-cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateCart(item.id, 'increase')}>+</button>
            <button onClick={() => updateCart(item.id, 'decrease')}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice}</p>
        <button className="checkout-btn">Checkout (Coming Soon)</button>
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
