import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setfilterProducts] = useState(null);

  // const getProductsCategory = async ()=>{
  //   try{
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     // filteredProducts = data
  //     setfilterProducts(data)
  //     // console.log(data)
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    if (!filterProducts || category == "undefined") setfilterProducts(products);

    if (category != "undefined") {
      setfilterProducts(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className=" w-[85%] p-5 pt-[4%] flex flex-wrap gap-5 overflow-y-auto overflow-x-hidden">
        {filterProducts ? (
          filterProducts.map((item, index) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="card p-3 w-[15%] h-[35vh] border shadow rounded flex flex-col justify-center items-center"
            >
              <div
                className="w-full h-[80%] bg-contain  bg-no-repeat bg-center mb-2 hover:scale-110 transition duration-300"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <div className="p-name w-full flex items-center overflow-hidden mt-2">
                <h1 className="hover:text-blue-400 text-sm font-semibold truncate ">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
