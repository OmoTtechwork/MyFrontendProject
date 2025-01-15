"use client";

import React, { createContext, useState, useEffect } from "react";

const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart")) || [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <SideBarContext.Provider value={{ cart, setCart }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarProvider, SideBarContext };
