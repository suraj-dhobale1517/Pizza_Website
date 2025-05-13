import React from 'react';
import "../styles/Cart.css";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-wrapper">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th> {/* Added a column for the quantity and buttons */}
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  </td>
                  <td>₹{item.price}</td>

                  <td>
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="quantity-btn"
                    >
                      -
                    </button>

                    {item.quantity}
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="quantity-btn"
                    >
                      +
                    </button>

                  </td>

                  <td>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                    
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total">
            <h2>Total: ₹{totalPrice}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
