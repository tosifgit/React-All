import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Navbar({title}) {
  return (
<div>


<title>{title}</title>
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
    <Link to="/" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
      <h2 className="mb-2 text-white">Logistica</h2>
    </Link>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
        <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
        <div className="nav-item dropdown">
          <NavLink to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
          <div className="dropdown-menu fade-up m-0">
            <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
            <NavLink to="/feature" className="dropdown-item">Features</NavLink>
            <NavLink to="/quote" className="dropdown-item">Free Quote</NavLink>
            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
            <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
            <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
          </div>
        </div>
        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
      </div>
      <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3" />+012 345 6789</h4>
    </div>
  </nav>
  {/* Navbar End */}
</div>

)
}
