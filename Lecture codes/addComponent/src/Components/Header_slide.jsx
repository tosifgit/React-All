import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Header_slide() {
    return (
        <div>
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
                {/* slider section */}
                <section className="slider_section ">
                    <div className="slider_bg_box">
                        <img src="images/slider-bg.jpg" alt />
                    </div>
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                            <li data-target="#customCarousel1" data-slide-to={1} />
                            <li data-target="#customCarousel1" data-slide-to={2} />
                            <li data-target="#customCarousel1" data-slide-to={3} />
                            <li data-target="#customCarousel1" data-slide-to={4} />
                        </ol>
                    </div>
                </section>
                {/* end slider section */}
            </div>
        </div>

    )
}

export default Header_slide