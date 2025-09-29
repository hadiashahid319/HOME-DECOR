import React, { useState } from "react";
import Cart from "./Cart";

function Navbar({ cartItems, removeFromCart, increaseQty, decreaseQty }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#bc8d57",
        position: "relative", // zaroori hai cart ko anchor karne ke liye
      }}
    >
      {/* Logo */}
      <h2>NOVALIE</h2>

      {/* Links */}
      <div>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </div>

      {/* Cart Icon */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setCartOpen(!cartOpen)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🛒 Cart ({cartItems.length})
        </button>
        {{if (cartOpen) {
            <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        }}}
        {/* Dropdown Cart */}
        {cartOpen && (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
