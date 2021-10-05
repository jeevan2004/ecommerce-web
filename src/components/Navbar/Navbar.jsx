import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaShoppingCart, FaRegUser, FaBars, FaRegHeart, FaBalanceScale, FaUnlockAlt, FaDollarSign, FaEuroSign, FaPoundSign, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = () => {
    const myState= useSelector((state)=>state.changeTheNumber);
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
                    <Link className="navbar-brand" to="/">
                      <h1>Jeevan</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FaBars /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav header_link">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                           
                            <li className=" nav-item">
                                <div class="dropdown">
                                    <Link class="nav-link dropdown-toggle" to="shop" role="button" id="dropdownMenuLink"  aria-expanded="false">
                                    Shop
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className="dropdown-item">PRODUCT DETAILS</li>
                                        <li><Link class="dropdown-item" to="/shop">Product Details Standard</Link></li>

                                    </ul>
                                </div>
                            </li>
                            <li className=" nav-item">
                                <div class="dropdown">
                                    <Link class="nav-link dropdown-toggle" to="/blog" role="button" id="dropdownMenuLink"  aria-expanded="false">
                                        Blog
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className="dropdown-item">BLOG STYLE</li>
                                        <li><Link class="dropdown-item" to="/blog">Blog Standard</Link></li>
                                        <li><Link class="dropdown-item" to="/blog/full-width">Standard Full Width</Link></li>

                                    </ul>
                                </div>
                            </li>
                         
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                            <div class="dropdown">
                                    <Link  class="nav-link dropdown-toggle" role="button" id="dropdownMenuLink"  aria-expanded="false">
                                    Pages
                                    </Link>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className="dropdown-item">Pages</li>
                                        <li><Link class="dropdown-item" to="/about">About</Link></li>
                                        <li><Link class="dropdown-item" to="/contact">Contact</Link></li>
                                        <li><Link class="dropdown-item" to="/404">Page 404</Link></li>
                                        <li><Link class="dropdown-item" to="/">Typography</Link></li>

                                    </ul>
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
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
                          
                            <li className="user-dropdown">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle cart-icon" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{myState}</span>
                                    <FaShoppingCart className="icon" />
                                    </a>

                                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <div className="add-cart">
                                                <div className="row">
                                                    <div className="col-4 px-0">
                                                        <img src={require("../../assets/product-01.jpg").default} alt="" />
                                                    </div>
                                                    <div className="col-8 px-0">
                                                        <div className="add-cart-text">
                                                            <h4><a href="/">Relaxed-fit cotton shirt</a>
                                                            <a href="/" className="delet-cart"><FaTrashAlt/></a></h4>
                                                            <p className="add-cart-name">Grey,M,Cotton</p>
                                                            <p className="add-cart-price">$32.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <div className="cart-totel">
                                            <span>SUBTOTEL:</span>
                                            <span>$97.60</span>
                                        </div>
                                    </ul>
                                </div>


                            </li>
                            <li className="user-dropdown">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaRegUser className="icon" />
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="/"><FaRegUser className="icon" />Account</a></li>
                                        <li><a class="dropdown-item" href="/"><FaShoppingCart className="icon" />Cart</a></li>
                                        <li><a class="dropdown-item" href="/"><FaRegHeart className="icon" />Wishlist</a></li>
                                        <li><a class="dropdown-item" href="/"><FaBalanceScale className="icon" />Compare</a></li>
                                        <li><a class="dropdown-item" href="/"><FaUnlockAlt className="icon" />Log in</a></li>
                                        <li><a class="dropdown-item" href="/"><FaRegUser className="icon" />Register</a></li>
                                    </ul>
                                </div>


                            </li>


                            <li className="user-dropdown">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FaSlidersH className="icon" />
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="/"><FaDollarSign className="icon" />USD - US Dollar</a></li>
                                        <li><a class="dropdown-item" href="/"><FaEuroSign className="icon" />EUR - Euro</a></li>
                                        <li><a class="dropdown-item" href="/"><FaPoundSign className="icon" />GBP - British Pound Sterling</a></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="response-logo">
                    <div className="response-logo-img">
                        <h1>Jeevan</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
