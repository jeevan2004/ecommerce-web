import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';

const Seller = () => {
    return (
        <>
            <section className="trending" >
                <div className="container">
                    <div className="trending-heading text-center pb-4">
                        <h1>Best Seller</h1>
                        <p>Top Views In This Week</p>
                    </div>
                    <div className="row trendingMain">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <div className="trending-img-location"><span>Featured</span></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-01.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-01-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Gusse</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Relaxed-Fit Cotton Shirt</a>
                                    </h2>
                                    <div className="trendingItem-price">$12.00</div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Grey</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-01.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Green</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-01-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    S
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    M
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    X
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Cotton</span>
                                                <a href="">
                                                    <img src={require("../../assets/texture-img-01.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Silk</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-02.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*****************trendingItem-2**************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-14.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-14-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Levi's</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Packable Jacket</a>
                                    </h2>
                                    <div className="trendingItem-price">$12.00</div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Grey</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-14.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Green</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-14-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    S
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    M
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    X
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Cotton</span>
                                                <a href="">
                                                    <img src={require("../../assets/texture-img-01.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Silk</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-02.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*****************trendingItem-3**************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <div className="trending-img-location"><span style={{ background: "#000" }}>Out Of Stock</span></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-15.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-15-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Gap</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Douglas Calfskin Buckle Belt</a>
                                    </h2>
                                    <div className="trendingItem-price">$62.12</div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">ChocLate</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-15.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Black</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-15-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    M
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    X
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    X
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Cotton</span>
                                                <a href="">
                                                    <img src={require("../../assets/texture-img-01.jpg").default} alt="" />
                                                </a>
                                            </li>

                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary disabled">
                                                <FaShoppingCart className="cart-button-icon" />
                                                Sold Out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*****************trendingItem-4**************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <div className="trending-img-location"><span>Featured</span></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-10.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-10-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Levi's</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Skinny Fit Stretch Mesh Polo</a>
                                    </h2>
                                    <div className="trendingItem-price">$322.00</div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Grey</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-10.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Green</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-10-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    S
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    M
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    X
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Cotton</span>
                                                <a href="">
                                                    <img src={require("../../assets/texture-img-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Silk</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-05.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**********************trendingItem-5************************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <div className="trending-img-location"><span>Featured</span></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-13.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-13-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Locoste</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Saffiano Leather Belt</a>
                                    </h2>
                                    <div className="trendingItem-price"><span>$96.81</span>$121.00</div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">White</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-13.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Brown</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-13-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Black</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-13-04.jpg").default} alt="" />
                                                </a>
                                            </li>

                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    S
                                                </a>
                                            </li>

                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Leather</span>
                                                <a href="">
                                                    <img src={require("../../assets/texture-img-04.jpg").default} alt="" />
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**********************trendingItem-6************************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <div className="trending-img-location"><span>Featured</span></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-11.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-11-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Zara</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Wimbledon Cross Court Cap</a>
                                    </h2>
                                    <div className="trendingItem-price">$140.00</div>

                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**********************trendingItem-7************************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-16.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-16-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Gap</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Custom Fit Soft-Touch Polo</a>
                                    </h2>
                                    <div className="trendingItem-price">$5.00</div>

                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**********************trendingItem-8************************** */}
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="trendingItem">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1"><FaEye /></div>
                                    <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                                    <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-05.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-05-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Satin</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Viscose-Cashmere-Scarf</a>
                                    </h2>
                                    <div className="trendingItem-price">$32.00</div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Light-Blue</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-05.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Blue</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-05-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Black</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-05-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    M
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    X
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    XL
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Cotton</span>
                                                <a href="">
                                                    <img src={require("../../assets/texture-img-01.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Nylon</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-02.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Polyester</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">
                                            <button className="cart-button btn btn-primary">
                                                <FaShoppingCart className="cart-button-icon" />
                                                add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Seller
