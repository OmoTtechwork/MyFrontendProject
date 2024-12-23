"use client"

import React, { useContext } from 'react'
import { SideBarContext } from '../providers'

export default function Button() {
    const {setCart} = useContext(SideBarContext)

    function handleCartIncrease(){
        setCart(prev => prev +1)
    }
  return (
    <div>
      <button onClick={handleCartIncrease } className="pb-2 cursor-pointer">
        <p className="p-2 border border-solid rounded-[8px] hover:shadow-2xl bg-gray-700 font-semibold text-white">Add to cart</p>
      
      </button>
    </div>
  )
}
