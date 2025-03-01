"use client";

import React, { useContext, useState } from "react";
import { SideBarContext } from "../providers";

export default function Button({ product }) {
  const { cart, setCart } = useContext(SideBarContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    console.log("Cart before adding:", cart, "Is Array:", Array.isArray(cart));

    if (!Array.isArray(cart)) {
      console.error("Cart is not an array, resetting.");
      setCart([]);
      return;
    }

    if (product && product.name) {
      if (!cart.some((item) => item.id === product.id)) { // Use product.id for checking
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        setAddedToCart(true);
        console.log("Property added:", product);
      } else {
        alert("Property already in the cart!");
      }
    }
  };

  return (
    <div>
      <button onClick={addToCart} className="pb-2 cursor-pointer">
        <p
          className={`p-2 border border-solid rounded-[8px] font-semibold text-white transition-all duration-300 ease-in-out ${
            addedToCart ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
          style={{
            animation: addedToCart ? "shake 0.5s ease-in-out" : "none", 
          }}
        >
          {addedToCart ? "Added to Cart" : "Buy Property"}
        </p>
      </button>
    </div>
  );
}
