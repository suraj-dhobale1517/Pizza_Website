import './App.css';
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart with the selected quantity
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity } // Add the selected quantity
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: item.quantity }]; // Add the new item with the selected quantity
      }
    });
  };

  // Increase item quantity
  const increaseQuantity = (item) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (item) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.name === item.name && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item.name !== itemToRemove.name));
  };

  return (
    <div className="App">
      <Router>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
