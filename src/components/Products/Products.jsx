import "./Products.css"
import { filterContext } from "../../context/FilterContext"


import React from 'react'
import MyLife from "../../MyLife"
// import Card from "../Card/Card"

const Products = () => {
  const {result} = filterContext()

  return (
    <div className="product-container">

      {result }

      <MyLife className="product-container"/>
  

      
    </div>
  )
}

export default Products
