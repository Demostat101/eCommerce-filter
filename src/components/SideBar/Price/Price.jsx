
import "./Price.css"
import { PriceArray } from "../../arrayData/ArrayData"
      
import { filterContext } from "../../../context/FilterContext"



import React from 'react'

const Price = () => {

  const {handleChange} = filterContext()
 

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {
        PriceArray.map(({value,type, label}) => {
          
          return <label htmlFor="" className="sidebar-label-container color-title" key={Math.random()}>
         
          <input  type={type} name="test2" value={value} id="price" onChange={handleChange }/>
          <span className="checkmark"></span> {label}
          
        </label>
        })
      }
      
    </div>
  )
}

export default Price
