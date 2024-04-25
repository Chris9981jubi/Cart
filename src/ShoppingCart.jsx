// ShoppingCart.js
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './ShoppingCart.css';

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const ProductList = ({ addToCart }) => (
  <div className="product-list">
    <h2>Products Available</h2>
    <ul>
      {Products.map(product => (
        <li key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button className="add-button" onClick={() => addToCart(product)}><FaPlus /></button>
        </li>
      ))}
    </ul>
  </div>
);

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cart.length === 0 ? (
      <p>No Product added to the cart</p>
    ) : (
      <>
        <ul>
          {cart.map(item => (
            <li key={item.product.id}>
              <span>{item.product.name} - ${item.product.price} - Quantity: {item.quantity}</span>
              <button className="remove-button" onClick={() => removeFromCart(item.product)}><FaMinus /></button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
      </>
    )}
  </div>
);

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map(item =>
      item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ShoppingCart;
