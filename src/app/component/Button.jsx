'use client';

import React, { useContext } from "react";
import { SideBarContext } from "../providers";

export default function Button({ product }) {
  const { cart, setCart } = useContext(SideBarContext);

  const addToCart = () => {
    console.log("Cart before adding:", cart, "Is Array:", Array.isArray(cart));

    if (!Array.isArray(cart)) {
      console.error("Cart is not an array, resetting.");
      setCart([]); 
      return;
    }

    
    if (product && product.name) {
      if (!cart.some((item) => item.name === product.name)) {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        console.log("Product added:", product);
      } else {
        alert("Product already in the cart!");
      }
    } 
  };

  return (
    <div>
      <button onClick={addToCart} className="pb-2 cursor-pointer">
        <p className="p-2 border border-solid rounded-[8px] hover:shadow-2xl bg-gray-700 font-semibold text-white">
          Add to cart
        </p>
      </button>
    </div>
  );
}
