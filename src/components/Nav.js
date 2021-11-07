import React from "react"
import useWindowSize from '../outils/useWindowSize'
import {Link} from  "react-router-dom"
const Nav = ({pack, toggle})=> {
const {width} = useWindowSize()
  return (
    
  <div className="navbar">
   <div className="container flex">
    {width>550 && 
        <div className="name-wrapper">
        <h1 className="name">Mostefa A </h1>
    </div>}
      <nav className="nav-wrapper">
        <ul className="navigation">
          <Link to="/" onClick={()=>toggle("about")}><li
            id="about-btn"
            className={"btn " + pack[0]}
            
          >
            <p>About</p>
          </li></Link>
          <Link to="/projects" onClick={()=>toggle("projects")}  className={"btn " + [pack[1]]}><li
            id="portfolio-btn"
           
          >
            <p>Projects</p>
          </li></Link>
          <Link to="contact" onClick={()=>toggle("contact")}><li
            id="contact-btn"
            className={"btn "+pack[2]}
          >
            <p href="/contact"> Contact</p>
          </li></Link>
        </ul>
      </nav>
    </div>
  </div>
  )
  }


  export default Nav