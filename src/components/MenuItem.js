import React, { useState } from "react";
import "../styles/MenuItem.css";

function MenuItem({ image, name, price, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  // Increment and decrement handlers for quantity
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  // Handle Add to Cart functionality
  const handleAddToCart = () => {
    if (quantity > 0) {
      // Only add to cart if quantity > 0
      onAddToCart({ image, name, price, quantity });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  // Format price to a currency format (assuming you want to use INR)
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);

  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-price">{formattedPrice}</p>

        <div className="quantity-controls">
          <button onClick={decrement} className="quantity-button">
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={increment} className="quantity-button">
            +
          </button>
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
