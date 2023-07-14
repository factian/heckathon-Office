
import React, { useEffect } from 'react'
import ProductCard from "@/components/productCard"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import { client } from "../../../sanity/lib/client"
import Product from "../../../sanity/Product"
import { SanityClient } from 'sanity'
import { Image } from 'sanity'



export const getProducts = async ()=> {
  const res = await client.fetch('*[_type=="product"]')
  return res;
} 

interface IProduct{
  pname:string,
  image:Image
  price:number
}

const getallproductlist = async () => {
  const data:IProduct[] = await getProducts()

  return(
    <div className="flex justify-evenly mt-16">
      {
        data.map((item: IProduct)=>
        <div>
          <div>
            {/* <img src={"https://uniworthdress.com/uploads/product/CS2192..jpg"} alt="" width="200px"/> */}

            {item.image.hotspot?._type}
          </div>
          <div>
            <b>{item.pname}</b></div>
          <div> 
            Price: ${item.price}
          </div>
        </div>
        )
      }
    </div>
  )
}

export const productlist = () => {
  return (
   <div className="flex justify-evenly mt-16">
        <ProductCard title="abc" price={100} img={P1}/>
        <ProductCard title="xyz" price={500} img={P1}/>
        <ProductCard title="Jacket" price={1000} img={P3}/>
    </div>

  )
}
export default getallproductlist