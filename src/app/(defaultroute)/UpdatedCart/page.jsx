'use client';

import React, { useContext, useState, useEffect } from "react";
import { SideBarContext } from "@/app/providers";
import Link from "next/link";
import Image from "next/image";

export default function UpdatedCart() {
  const { cart, setCart } = useContext(SideBarContext);
  const [clientCart, setClientCart] = useState([]);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setClientCart(cart);
    }
  }, [cart]);

  const removeFromCart = (product) => {
    const updatedCart = clientCart.filter((item) => item.name !== product.name);
    setClientCart(updatedCart);
    setCart(updatedCart);
  };

  if (clientCart.length === 0) {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-xl font-semibold">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const totalPrice = parseFloat(
    clientCart.reduce((total, product) => total + product.price, 0).toFixed(2)
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-xl font-semibold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {clientCart.map((product, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:space-x-4">
            <div className="image-container"> {/* New container for the image */}
              <Image
                src={product?.imageUrl || "default_image.jpg"}
                alt={product?.name || "Product"}
                width={100}  // Set default width
                height={100} // Set default height
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  width: '100%', // Ensure the image fills the container
                  height: '100%',//Ensure the image fills the container
                }}
              />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{product?.name || "Unnamed Product"}</h2>
              <p className="text-gray-700">Price: ₦ {product?.price?.toLocaleString() || "N/A"}</p>
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
          <p className="text-lg font-bold text-green-600">
            ₦ {totalPrice.toLocaleString()}
          </p>
        </div>
        <div className="mt-3">
          <Link href="/Checkout">
            <button className="w-full py-2 bg-black text-white rounded-md hover:cursor:pointer transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          width: 100px;   /* Default width */
          height: 100px;  /* Default height */
          position: relative;
          overflow: hidden; /* Clip images that overflow the container */
          border-radius: 8px; /* Match image border radius */
        }
        @media (min-width: 640px) { /* sm breakpoint (Small screens and up) */
          .image-container {
            width: 120px; /* Larger width on small screens and up */
            height: 120px; /* Larger height on small screens and up */
          }
        }

         @media (min-width: 768px) { /* md breakpoint (Medium screens and up) */
          .image-container {
            width: 140px; /* Larger width on medium screens and up */
            height: 140px; /* Larger height on medium screens and up */
          }
        }
      `}</style>
    </div>
  );
}