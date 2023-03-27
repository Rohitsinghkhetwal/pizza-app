import React from "react"
import { useParams } from "react-router-dom"
import { MenuList } from "../helper/MenuList"
import "../styles/Buycomponent.css"


const Menudetail = () => {
  let params = useParams()
  const product = MenuList.find((p)=> 
    p.id === params.id
  )

  return (
    <>
      <div className='image-container'>
        <div
          className='image'
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className='heading'>
          <h1>{product.name}</h1>
          <h4>Rs {product.price}</h4>
        </div>
       
        <button>Buy now</button>
        
        
       
      </div>
    </>
  )
}

export default Menudetail
