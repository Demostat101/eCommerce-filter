import "./Products.css"
import { filterContext } from "../../context/FilterContext"


import React from 'react'


const Products = () => {
  const {result} = filterContext()

  return (
    <div className="product-container">

      {result }

  

      
    </div>
  )
}

export default Products
