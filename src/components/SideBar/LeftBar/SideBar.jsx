

import Category from "../Category/Category"
import Price from "../Price/Price"
import Colors from "../Colors/Colors"
import "./SideBar.css"
import React from 'react'


const SideBar = () => {

  
  return (
    <div className="side-bar">

      <div className="logo-container">
        <h1>🛒</h1>

      </div> 
         
      <Category/>
      <Price/>
      <Colors/>
      
      
    </div>
  )
}

export default SideBar
