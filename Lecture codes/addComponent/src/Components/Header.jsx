import React from 'react'

import { NavLink,Link } from 'react-router-dom'

function Header() {
    return (
        <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/">
                            <span>
                                HandTime
                            </span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item ">
                                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about"> About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/product">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className="user_optio_box">
                                <a href>
                                    <i className="fa fa-user" aria-hidden="true" />
                                </a>
                                <a href>
                                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* end header section */}
        </div>




    )
}

export default Header