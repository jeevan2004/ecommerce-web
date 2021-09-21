import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaShoppingCart, FaRegUser, FaBars, FaRegHeart, FaBalanceScale, FaUnlockAlt, FaDollarSign, FaEuroSign, FaPoundSign } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [search, setSearch] = useState(false);

    const stickyHeader = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', stickyHeader);

    const searchBox = () => {
        setSearch(!search);
    };



    return (
        <header className={navbar ? 'active' : ''}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="">
                        <img src={require("../../assets/logo.png").default} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FaBars /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav header_link">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="trending" duration={10} delay={5}>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="pages">Pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="navbar-icon d-flex">

                            <li>

                                <FaSearch className="icon" onClick={searchBox} />
                                <div className={search ? "search-active" : ""}>
                                    <div className="search-box">
                                        <h1>What are you looking for ?</h1>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search Products" />
                                            <div class="input-group-prepend">
                                                <button class="btn" type="button"><FaSearch /></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </li>
                            <li className="cart-icon">
                                <span>0</span>
                                <FaShoppingCart className="icon" />

                            </li>
                            <li className="user-dropdown">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaRegUser className="icon" />
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#"><FaRegUser className="icon" />Account</a></li>
                                        <li><a class="dropdown-item" href="#"><FaShoppingCart className="icon" />Cart</a></li>
                                        <li><a class="dropdown-item" href="#"><FaRegHeart className="icon" />Wishlist</a></li>
                                        <li><a class="dropdown-item" href="#"><FaBalanceScale className="icon" />Compare</a></li>
                                        <li><a class="dropdown-item" href="#"><FaUnlockAlt className="icon" />Log in</a></li>
                                        <li><a class="dropdown-item" href="#"><FaRegUser className="icon" />Register</a></li>
                                    </ul>
                                </div>


                            </li>


                            <li className="user-dropdown">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaSlidersH className="icon" />
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#"><FaDollarSign className="icon" />USD - US Dollar</a></li>
                                        <li><a class="dropdown-item" href="#"><FaEuroSign className="icon" />EUR - Euro</a></li>
                                        <li><a class="dropdown-item" href="#"><FaPoundSign className="icon" />GBP - British Pound Sterling</a></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="response-logo">
                    <div className="response-logo-img">
                        <img src={require("../../assets/logo.png").default} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
