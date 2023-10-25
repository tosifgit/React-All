import React from 'react'
import {NavLink,Link} from 'react-router-dom'
export default function Header() {
  return (
    <div>

        <h1>
          
          {/* <!-- HEADER --> */}
      <header className="grid">
        {/* <!-- Top Navigation --> */}
        <nav className="s-12 grid background-none background-primary-hightlight">
           {/* logo */}
           <NavLink to="/" className="m-12 l-3 padding-2x logo">
              <img src="img/logo.svg"/>
           </NavLink>
           <div className="top-nav s-12 l-9" style={{backgroundColor:'grey'}}> 
              <ul className="top-ul right chevron">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
           </div>
        </nav>
      </header>

        </h1>
    </div>
  )
}