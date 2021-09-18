import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';

const Trending = () => {
    return (
        <>
            <section className="trending" id="trending">
                <div className="container">
                    <div className="trending-heading text-center pb-4">
                        <h1>Trending</h1>
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
                                    <div className="trending-img-location"><span style={{ background: "red" }} >Sale 20%</span></div>
                                    <a href="">
                                        <div className="img-active">
                                            <img src={require("../../assets/product-02.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-02-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">One Ummha</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">East Hampton Fleece Hoodie</a>
                                    </h2>
                                    <div className="trendingItem-price">
                                        <span>$65.60</span> <del>$82.00</del></div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Black</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-02.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Grey</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-02-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <a href="" title="Grey">
                                                    X
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="" data-original-title="Green">
                                                    M
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
                                                    <img src={require("../../assets/texture-img-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Silk</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-03.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-05.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Nailon</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/texture-img-02.jpg").default} alt="" />
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
                                    <div className="trending-img-location"><span>Featured</span></div>
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
                                            <img src={require("../../assets/product-06.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-06-02.webp").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">oxford</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Plaid Cotton Oxford Shirt</a>
                                    </h2>
                                    <div className="trendingItem-price"> <span>$55.91</span> <del>$62.12</del></div>
                                    <div className="trendingItem-options">
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Blue</span>
                                                <a href="">
                                                    <img src={require("../../assets/product-06.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Pink</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-06-04.jpg").default} alt="" />
                                                </a>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Green</span>
                                                <a href="" data-original-title="Green">
                                                    <img src={require("../../assets/product-06-05.webp").default} alt="" />
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
                                            <img src={require("../../assets/product-09.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-09-02.jpg").default} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <a href="">Guess</a>
                                        <div className="rating">
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStar /></span>
                                            <span><FaStarHalfAlt /></span>
                                        </div>
                                    </div>
                                    <h2>
                                        <a href="">Two-Tone Sleeveless Dress</a>
                                    </h2>
                                    <div className="trendingItem-price"><span>$170.00</span> <del>$340.00</del></div>

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
                        {/**********************trendingItem-7************************** */}
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
                        {/**********************trendingItem-8************************** */}
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
                    </div>


                </div>
            </section>
        </>
    )
}

export default Trending
