import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [uniq, setUniq] = useState(null)
  // console.log(uniq)
  const [products] = useContext(ProductContext)

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category] ,[])
      distinct_category = [...new Set(distinct_category)];

  const color = () =>{
    return `
    rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.8)`
  }
  // console.log(color())

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 overflow-x-hidden">
        <a
          className="py-3 px-2 border-2 border-blue-600 text-blue-600 font-semibold rounded"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        <div className=" w-[80%]">

          {distinct_category.map((c,i)=>(
              <Link key={i} to={`/?category=${c}`} className="mb-3 flex items-center justify-start gap-2">
              <span style={{backgroundColor: color()}} className="w-[15px] bg-blue-300 rounded-full h-[15px]"></span>
              {`${c[0].toUpperCase()}${c.slice(1, c.length)}`}
            </Link>
          ))}
          
          
        </div>
      </nav>
  )
}

export default Nav