import React, { createContext, useEffect, useState } from "react";
// import axios from '../Utils/axios'

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  //   const getProducts = async()=>{
  //     try{
  //         const {data} = await axios("/products")

  //         setproducts(data)
  //         // console.log(products)
  //     }
  //     catch(error){
  //       console.log(error)
  //   }
  // };

  // console.log(products)

  // useEffect(() => {
  //   // getProducts()
  // }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
