import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../Utils/Context";
import { toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter(p => p.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    toast.success("Product is Deleted")
    navigate('/');
  };

  useEffect(() => {
    if (!product) {
      setProduct(products.filter(p=> p.id == id)[0])
    }
  }, [id, products]);

  return product ? (
    <div className="w-[70%] h-full flex justify-center m-auto items-center gap-20 px-[5%] overflow-hidden">
      <button className="absolute top-2 left-[24%] border-blue-500 border-2 rounded px-6 py-2 text-sm font-semibold text-blue-500" onClick={() => navigate(-1)}>Back</button>
      <div className="w-[28vw] p-2">
        <img className="h-[60vh] object-contain" src={product.image} alt="" />
      </div>
      <div className="content w-[30vw]">
        <h1 className="font-semibold text-4xl mb-2">{product.title}</h1>
        <h2 className="font-semibold text-zinc-400 text-lg mt-2">{`$ ${product.price}`}</h2>
        <div className="w-full overflow-hidden line-clamp-6">
          <p className="font-semibold mt-2">{product.description}</p>
        </div>
        <div className="mt-5 flex gap-4">
          <Link to={`/edit/${product.id}`} className="px-10 py-2 text-green-500 font-semibold border-green-500 border-2 rounded">Edit</Link>
          <button onClick={() => ProductDeleteHandler(product.id)} className="px-10 py-2 text-red-500 font-semibold border-red-500 border-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  ) : <Loading />;
};

export default Details;
