import React from 'react'
import  { useState, useEffect } from "react";
import Prime from "../../assets/prime.png"
import Product from "./Product"
import productsData from './Products.json'; // Path to your JSON file

const Products = ({language}) => {
    // Store products in state (optional)
    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts(productsData.products);
    }, []);
  return (
    <div className=' bg-section h-[492px] relative'>
      <div className=''>
          <img src={Prime} alt="prime" className={`w-[598px] h-[696px] opacity-[5%] absolute top-[-30px] ${language == "AR" ? "left-0" : "right-0"}`} />
      </div>
      <div className='container px-[112px] py-[30px]'>
        <h1 className='text-title font-bold text-[30px] mb-5'>{language == "EN" ? "Choose For Us" : "اخترنا لك"}</h1>
        <div className="product-list flex flex-wrap gap-6 items-center justify-center">
        {products.map((product) => (
          <Product
            key={product.id} // Unique key for each product
            language={language}
            name={product.name}
            nameAr = {product.nameAr}
            desc={product.desc}  
            descEN={product.descEN}  
            price={product.price}
            rate={product.rate}
            discount={product.discount}
            perc={product.perc}
          />
        ))}
      </div>
        
      </div>
      
    </div>
  )
}

export default Products
