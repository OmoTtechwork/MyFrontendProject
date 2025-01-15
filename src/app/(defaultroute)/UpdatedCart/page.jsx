"use client";

import React, { useContext } from "react";
import { SideBarContext } from "@/app/providers";
import Link from "next/link";

export default function UpdatedCart() {
  const { cart, setCart } = useContext(SideBarContext);

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
  };

  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-xl font-semibold">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-xl font-semibold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((product, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:space-x-4">
            <img
              src={product?.imageUrl || "default_image.jpg"}
              alt={product?.name || "Product"}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{product?.name || "Unnamed Product"}</h2>
              <p className="text-gray-700">Price: ${product?.price?.toFixed(2) || "N/A"}</p>
              <div className="mt-3 flex space-x-3">
                <button
                  onClick={() => removeFromCart(product)}
                  className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 focus:outline-none transition"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="font-semibold text-lg">Checkout</h2>
        <div className="flex justify-between mt-3">
          <p className="text-lg font-medium">Total: </p>
          <p className="text-lg font-bold text-green-600">${totalPrice}</p>
        </div>
        <div className="mt-3">
          <Link href="/Checkout">
            <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
