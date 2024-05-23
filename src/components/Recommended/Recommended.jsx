import "./Recommended.css"
import { filterContext } from "../../context/FilterContext"

import React from 'react'


const Recommended = () => {

  const {handleClick} = filterContext();


  return (
    <div className="recommended-container">
        <h2 className="recommended-title">Recommended</h2>

        <div className="recommended-flex">
            <button onClick={handleClick} value= "" className="btns">All Products</button>
            <button onClick={handleClick} value= "Nike" className="btns">Nike</button>
            <button onClick={handleClick} value= "Adidas" className="btns">Adidas</button>
            <button onClick={handleClick} value= "Puma" className="btns">Puma</button>
            <button onClick={handleClick} value= "Vans" className="btns">Vans</button>
            
        </div>
    </div>
  )
}

export default Recommended
