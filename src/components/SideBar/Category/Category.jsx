import { CategoryArray } from "../../arrayData/ArrayData"
import "./Category.css"
import { filterContext } from "../../../context/FilterContext"

let a = "radio"

import React from 'react'

const Category = () => {
  const {handleChange} = filterContext()
  return (
    <div className="ml">
      <h2 className="sidebar-title">Category</h2>

      {
        CategoryArray.map(({value,type, label}) => {
          
          return <label htmlFor="test" className="sidebar-label-container color-title" key={Math.random()}>
         
          <input  type={type} name="test" value={value} id="all" onChange={handleChange} />
          
          <span className="checkmark"></span> {label}
          
        </label>
        })
      }
      
    </div>
  )
}

export default Category
