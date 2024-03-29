import React from "react"
import logo from "../assets/cronit-logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button 
          type="button" 
          className="toggle-btn" 
          onClick={toggleSidebar} 
        >
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
    </div>
    <PageLinks styleClass="nav-links"></PageLinks>
  </nav>
}

export default Navbar
