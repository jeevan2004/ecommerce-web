import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer id="contact">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-12">
                                <div className="footer-newsletter">
                                    <h1 className="newsletter-text">BE IN TOUCH WITH US:</h1>
                                    <div className="newsletter-form">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Enter Your Email" />
                                            <div class="input-group-prepend">
                                                <button class="btn" type="button">Join Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-12">
                                <ul className="newsletter-icon">
                                    <li>
                                        <a href="/">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaYoutube />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-inner">
                                    <h4>CATEGORIES</h4>
                                    <ul>
                                        <li><a href="/">Casual</a></li>
                                        <li><a href="/">Casual</a></li>
                                        <li><a href="/">Jeans</a></li>
                                        <li><a href="/">Men</a></li>
                                        <li><a href="/">Shirt</a></li>
                                        <li><a href="/">Women</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-inner">
                                    <h4>My Account</h4>
                                    <ul>
                                        <li><a href="/">Account</a></li>
                                        <li><a href="/">Cart</a></li>
                                        <li><a href="/">Wishlist</a></li>
                                        <li><a href="/">Compare</a></li>
                                        <li><a href="/">Log In</a></li>
                                        <li><a href="/">Casual</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-inner">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor ut labore et dolore. Lorem ipsum dolor amet conse ctetur adipisicing elit, sedo eiusmod tempor incididunt ut labore etdolore. </p>
                                </div>

                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-6">
                                <div className="footer-inner">
                                    <h4>Contact</h4>
                                    <p><span>Address:</span>2548 Broaddus Maple Court Avenue, Madisonville KY 4783, USA </p>
                                    <p><span>Phone:</span>+91 7220920915; +777 2345 7886 </p>
                                    <p><span>Hours:</span>7 Days a week from 10 am to 6 pm</p>
                                    <p><span>Email:</span><a href="/">jeeva@gmail.com</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="copyright">
                                    <a href="/" className="copyright-logo"><img src={require("../../assets/JEEVAN.png").default} alt="" /></a>
                                    <p>© Jeevan 2021. Made with <span><FaRegHeart /></span> by</p>
                                    <a href="/" className="copyright-name">Jeevan</a>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="payment">
                                    <img src={require("../../assets/payment.jpg").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer