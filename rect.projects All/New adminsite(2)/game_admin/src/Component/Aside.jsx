import { Link, Nav, NavLink } from "react-router-dom";
import React from 'react';


function Aside() {
  return (
    <div>
      <div className="sidebar pe-4 pb-3">
        <Link className="navbar bg-secondary navbar-dark">
          <NavLink to="/" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"><i className="fa fa-user-edit me-2" />DarkPan</h3>
          </NavLink>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt style={{ width: 40, height: 40 }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <NavLink to="/dashboard" className="nav-item nav-link "><i className="fa fa-chart-line fa-1x text-primary" />Dashboard</NavLink>
            <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Emploee</NavLink>
              <div className="dropdown-menu bg-transparent border-0">
                <NavLink to="/add_amploee" className="dropdown-item">Add Emploee</NavLink>
                <NavLink to="/manageempoloee" className="dropdown-item">Manege Emploee</NavLink>
              </div>
            </div>
            <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Product</NavLink>
              <div className="dropdown-menu bg-transparent border-0">
                <NavLink to="/add_product" className="dropdown-item">Add Product</NavLink>
                <NavLink to="/manageempoloee" className="dropdown-item">Manege Product</NavLink>
              </div>
            </div>
            <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Catagorys</NavLink>
              <div className="dropdown-menu bg-transparent border-0">
                <NavLink to="/add_cat" className="dropdown-item">Add Categories</NavLink>
                <NavLink to="/manage_cat" className="dropdown-item">Manage Categories</NavLink>
              </div>
            </div>

            <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Other Options</NavLink>
              <div className="dropdown-menu bg-transparent border-0">
                <NavLink to="/manageProduct" className="dropdown-item">Manege Product</NavLink>
                <NavLink to="/manage_cart" className="dropdown-item">Manege Cart</NavLink>
                <NavLink to="/manage_order" className="dropdown-item">Manege Order</NavLink>
                <NavLink to="/manage_payment" className="dropdown-item">Manege Payments</NavLink>
                <NavLink to="/manage_contact" className="dropdown-item">Manege Contact</NavLink>
                <NavLink to="/manage_customer" className="dropdown-item">Manege Customer</NavLink>
              </div>
            </div>
            <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Pages</NavLink>
              <div className="dropdown-menu bg-transparent border-0">
                <NavLink to="/" className="dropdown-item">Sign In</NavLink>
                <NavLink to="/" className="dropdown-item">Sign Up</NavLink>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div>

  )
}

export default Aside