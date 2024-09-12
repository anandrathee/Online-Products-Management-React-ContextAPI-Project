import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate()
  const {id} = useParams()
  const [product, setproduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",

  })

  const ChangeHandler = (e)=>{
    // console.log(e.target.name, e.target.value)
    setproduct({...product, [e.target.name]: e.target.value})
    // setProduct({...product, [e.target.name]: e.target.value})
  }

  // console.log(title)

  useEffect(()=>{
    setproduct(products.filter( p => p.id == id)[0])
  },[id])

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.length < 1||
      product.description.trim().length < 5
    ) {
      alert("Every input must have atleast 4 characters");
      return;
    }


  //  console.log(product)
   const pi = products.findIndex((p) => p.id == id)
   const copyData = [...products];
   copyData[pi] = {...products[pi], ...product}
  //  console.log(copyData)

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData))
    navigate(-1) 
    // // toast.success("New Product Added!")
   
  };
  // console.log(products);
  return (
    <form
      action=""
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="text-3xl mb-5 ">Edit Product</h1>

      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
        onChange={ChangeHandler}
        name= "image"
        value={product && product.image}
      />

      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
        onChange={ChangeHandler}
        name="title"
        value={product && product.title}
      />

      <div className="w-1/2 flex gap-2">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
          onChange={ChangeHandler}
          name="category"
          value={product && product.category}
        />

        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
          onChange={ChangeHandler}
          name="price"
          value={product && product.price}
        />
      </div>

      <textarea
        onChange={ChangeHandler}
        name="description"
        className="text-1xl bg-zinc-100 w-1/2 border-2 p-5 outline-none border-blue-500 rounded mb-3"
        placeholder="Product Description..."
        rows="10"
        id=""
        value={product && product.description}
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 self-start px-2 border-2 border-blue-600 text-blue-600 font-semibold rounded">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
