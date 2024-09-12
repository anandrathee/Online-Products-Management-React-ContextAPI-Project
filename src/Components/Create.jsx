import React, { useContext, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useContext(ProductContext);
  const [image, setimage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  // console.log(title)

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1||
      description.trim().length < 5
    ) {
      alert("Every input must have atleast 4 characters");
    }
    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]))
    navigate('/') 
    toast.success("New Product Added!")
    // console.log(product);
  };
  return (
    <form
      action=""
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="text-3xl mb-5 ">Add New Product</h1>

      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex gap-2">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />

        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 p-2 mt-2 mb-2 outline-none pl-5 w-1/2 border-2 border-blue-500 rounded"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        onChange={(e) => setdescription(e.target.value)}
        className="text-1xl bg-zinc-100 w-1/2 border-2 p-5 outline-none border-blue-500 rounded mb-3"
        placeholder="Product Description..."
        name=""
        rows="10"
        id=""
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 self-start px-2 border-2 border-blue-600 text-blue-600 font-semibold rounded">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
