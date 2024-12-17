import React from 'react'
import { products } from '@/app/component/data'
import Image from 'next/image'
import Link from 'next/link'

export default async function SlugForCart({params}) {
  const slugProduct = await params
  const  productDetails = products.find(product => product.name.split(' ').join('_') == slugProduct.Slug)
  const relatedProduct = products.filter(product => (product.bedrooms == productDetails.bedrooms) && (productDetails.name !== product.name)).map(checkProduct => (
    <section key={checkProduct.id} className="flex flex-col items-center hover:shadow-2xl">
      <Link href={`/shop/${checkProduct.name.replaceAll(' ','_')}`} title={`${checkProduct.name} is a type of ${checkProduct.name}`}>

            <Image src={checkProduct.imageUrl} alt={checkProduct.name} width={200} height={200}/>
            <div className='text-center'>
            <h2>{checkProduct.name}</h2>
            <p>{checkProduct.category}</p>

            </div>
          </Link>
        </section>
       ))

       return (
        <div>
          <div className='flex justify-center bg-gray-200'>
          <div className='grid grid-cols-4 grid-rows-2  border-4'>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
            <Image src={`https://robohash.org/${productDetails.id}`} className='border border-solid' alt={productDetails.name} width={320} height={200}/>
          </div>
          </div>

        
        <div className='flex flex-col p-[40px]'>

          <div className='flex flex-row gap-10 w-[100%] justify-center'>
          <div>
          <Image src={productDetails.imageUrl} className='border border-solid' alt={productDetails.name} width={600} height={300}/>
          <h1 className='text-center font-bold text-2xl'>{productDetails.name}</h1>
          <p className='text-center font-bold text-xl'>&#8358; <strong>{productDetails.price.toLocaleString()}</strong></p>
          </div>
          <div className='justify-center align-center content-center'>
          <div className='w-[500px] h-[500px] border border-solid '>
    
          <div className='font-bold text-2xl py-[28px] text-center'>
            <p className='p-2 bg-black text-white rounded-[10px] '>{productDetails.category}</p>
          </div>
    
          <p className='pb-[30px] px-2 text-center'>{productDetails.description}</p>

          <div className='text-center'>
          <div className='font-semibold text-2xl py-[28px] text-center'>
            <p className='p-2 bg-black text-white rounded-[10px] '>Agent Contact Info</p>
          </div>
            <div>
            <p>{productDetails.listingAgent.name}</p>

            <p>{productDetails.listingAgent.contact}</p>

            <p>{productDetails.listingAgent.phone}</p>

          </div>
          </div>

          </div>


          </div>
          </div>
    
        </div>
          <section className='w-[100%]'>
          <h2 className='py-4 bg-[#9ba3af] capitalize text-center font-bold text-white text-3xl border-y-8 mx-4 my-7'>Similar Buildings with {productDetails.bedrooms} bedroom</h2>
          <div className='flex justify-center p-10'>
          <div className='grid grid-cols-3 w-[100%]  gap-10'>
            {relatedProduct}
          </div>

          </div>
        </section>
        </div>
      )
    }
    