import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="nav-profile-image">
                            <img src="assets/images/faces/face1.jpg" alt="profile" />
                            <span className="login-status online" />
                            {/*change to offline or busy as needed*/}
                        </div>
                        <div className="nav-profile-text d-flex flex-column">
                            <span className="font-weight-bold mb-2">David Grey. H</span>
                            <span className="text-secondary text-small">Project Manager</span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                    </a>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                        <span className="menu-title">Dashboard</span>
                        <i className="mdi mdi-home menu-icon" />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span className="menu-title">Employee</span>
                        <i className="menu-arrow" />
                        <i className="mdi mdi-crosshairs-gps menu-icon" />
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <NavLink className="nav-link" to="/addemployee">Add Employee</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/manageEmployee">Manage Employee</NavLink></li>
                        </ul>
                        
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categories">
                        <span className="menu-title">Categories</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/product">
                        <span className="menu-title">Products</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/mcustomer">
                        <span className="menu-title">Manage Customer</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                        <span className="menu-title">Cart</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/orders">
                        <span className="menu-title">Order</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                    </NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/payment">
                        <span className="menu-title">Payment</span>
                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                    </NavLink>
                </li>
                

            </ul>
        </nav>

    )
}

export default Nav