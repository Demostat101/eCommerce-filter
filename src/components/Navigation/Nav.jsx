import "./Nav.css"
import { FiHeart } from "react-icons/fi"
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineUserAdd } from "react-icons/ai"
import { filterContext } from "../../context/FilterContext"

import React from 'react'

const Nav = () => {
    const {query, handleInputChange} = filterContext();
    console.log(query);
  return (
    <nav className="navigation">

        <form action="" onSubmit={(e)=> e.preventDefault()}>

            <div className="Nav-container">
                <input type="text" value={query} onChange={handleInputChange} placeholder="Enter your search Shoes." className="search-input"/>
            </div>

        </form>

        <div className="profile-container">
            <a href="#">
                <FiHeart className="nav-icon"/>
            </a>

            <a href="#">
                <FaShoppingCart className="nav-icon"/>
            </a>

            <a href="#">
                <AiOutlineUserAdd className="nav-icon"/>
            </a>

        </div>
    </nav>
  )
}

export default Nav
