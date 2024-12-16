import Image from 'next/image'
import React from 'react'
import AboutRealEstate from './component/Faq'
import Link from 'next/link'
import { MdRealEstateAgent } from "react-icons/md";
import IconNav from './component/NavIcon';
import RealEstateConcept from './component/RealEstate';
import HomeSearch from './component/HomeSearch';


export default function Home() {
  return (
    <div>
        <div>
            <HomeSearch/>
        </div>
      <section className="h-[370vh]">
       <section className="w-[100%] h-[92vh] bg-slate-300 items-center justify-center content-center flex flex-col">
        <Link href="/Cart"><MdRealEstateAgent size={90} /></Link>
        <h2 className="py-4 text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi?</h2>
        </section>  
        <section>
        <div>
            <RealEstateConcept/>
        </div>
        </section>
       <section>
        <div className='flex justify-center p-[50px]'>
            <div className="grid grid-cols-2 grid-row-2 w-[90%]">
                <div className="flex flex-col justify-center content-center h-[300px] p-[40px] bg-[#F5F5F5] gap-5">
                    <h1 className='text-3xl font-extrabold'>
                       Advertise Your Rental
                    </h1>
                    <p>
                      Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform.
                    </p>
                    <a className='w-[145px]  text-blue-500 pt-[50px] font-bold' href='/Login'>List Your Property</a>
                </div>
                <div>
                   <Image src={'https://images.pexels.com/photos/18774966/pexels-photo-18774966/free-photo-of-walls-of-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="Full-width Image" width={500} height={300} className="w-full h-[300px]" />
                </div>
                <div>
                <Image src={'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1200'} alt="Full-width Image" width={500} height={300} className="w-full h-[300px]" />
                </div>
                <div className="flex flex-col justify-center content-center h-[300px] p-[40px] bg-[#F5F5F5] gap-5">
                    <h1 className='text-3xl font-extrabold'>
                        Lease 100% Online
                    </h1>
                    <p>
                    Accept applications, process rent payments online, and sign digital leases all powered on a single platform.
                    </p>
                    <a className='w-[172px] text-blue-500 pt-[50px] font-bold' href='/Login'>Manage Your Property</a>
                </div>

            </div>

        </div>
            <div>
                <div>
                    <AboutRealEstate/>
                </div>
                <div>
                    <IconNav/>
                </div>
            </div>
        
        </section>
       
    

     </section>

    


    
      
    </div>
  )
}
