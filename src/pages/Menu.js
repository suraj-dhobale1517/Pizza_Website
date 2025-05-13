import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"; // Import the main CSS for Menu component

function Menu({ addToCart }) {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            onAddToCart={(item) => addToCart(item)} // Pass the item to the parent
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
