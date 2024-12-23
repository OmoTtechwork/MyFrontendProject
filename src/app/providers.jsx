 "use client"

 import React, { createContext, useState } from 'react'
 
 const SideBarContext = createContext()
 const SideBarProvider = ({children}) => {
    const [cart, setCart] = useState(0)
    const  [cartOpen, setCartOpen] = useState(false)
   return (
     <SideBarContext.Provider value={{cart, setCart, cartOpen, setCartOpen}}>
       {children}
     </SideBarContext.Provider>
   )
 }
 
 export  {SideBarProvider, SideBarContext}
 