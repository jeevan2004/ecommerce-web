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
                                    <div>
                                        <div className="img-active">
                                            <img src={require("../../assets/product-01.jpg").default} alt="" />
                                        </div>
                                        <div className="img-hover">
                                            <img src={require("../../assets/product-01-02.jpg").default} alt="" />
                                        </div>
                                    </div>
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
                                                <button>
                                                    <img src={require("../../assets/product-01.jpg").default} alt="" />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Green</span>
                                                <button>
                                                    <img src={require("../../assets/product-01-03.jpg").default} alt="" />
                                                </button>
                                            </li>
                                        </ul>
                                        <ul className="size-option">
                                            <li className="">
                                                <button>
                                                    S
                                                </button>
                                            </li>
                                            <li className="">
                                                <button>
                                                    M
                                                </button>
                                            </li>
                                            <li className="">
                                                <button>
                                                    X
                                                </button>
                                            </li>
                                        </ul>
                                        <ul className="color-option">
                                            <li className="tooltip active">
                                                <span class="tooltiptext">Cotton</span>
                                                <button>
                                                    <img src={require("../../assets/texture-img-01.jpg").default} alt="" />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Silk</span>
                                                <button>
                                                    <img src={require("../../assets/texture-img-02.jpg").default} alt="" />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <button>
                                                    <img src={require("../../assets/texture-img-03.jpg").default} alt="" />
                                                </button>
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

export default Trending
