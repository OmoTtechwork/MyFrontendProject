import Link from 'next/link'
import React from 'react'
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";


export default function IconNav() {
  return (
    <div>
        <section className="flex flex-row p-[70px] ">

            <div className="text-center p-10 flex flex-col ">
                <h2 className="text-3xl font-bold">Profile</h2>
                <p><Link href="/About" className='flex justify-center p-4'><CgProfile size={50}/></Link></p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, hic.</p>
            </div>

            <div className="text-center p-10">
                <h2 className="text-3xl font-bold">Cart</h2>
                <p><Link href="/Cart" className='flex justify-center p-4' ><HiShoppingCart size={50}/> </Link></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi!</p>
            </div>

            <div className="text-center p-10 ">
                <h2 className="text-3xl font-bold ">Support</h2>
                <p><Link href="./support" className='flex justify-center p-4'><BiSupport size={50} /></Link></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, suscipit!</p>
            </div>

        </section>

        
      
    </div>
  )
}
