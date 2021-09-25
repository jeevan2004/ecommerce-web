import React, {useState} from "react";
import { aboutProduct } from "./AboutProduct";
import {
    FaShoppingCart,
    FaEye,
    FaRegHeart,
    FaBalanceScale,
    FaStar,
    FaStarHalfAlt,
} from "react-icons/fa";
const About = () => {

    const [aboutCount, setAboutCount]= useState(1);
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className=" trendingMain">
                        <div className="row trendingItem">
                            <div className=" col-md-6">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1">
                                        <FaEye />
                                    </div>
                                    <div className="trending-img-icon icon-2">
                                        {" "}
                                        <FaRegHeart />
                                    </div>
                                    <div className="trending-img-icon icon-3">
                                        {" "}
                                        <FaBalanceScale />
                                    </div>
                                    <div className="trending-img-location">
                                        <span>Featured</span>
                                    </div>
                                    <div className='img_tab'>
                                        <div className="img-active img_sec">
                                            <img
                                                src={require("../assets/product-01.jpg").default}
                                                alt=""
                                            />
                                        </div>
                                        <div className="img-hover img_sec">
                                            <img
                                                src={require("../assets/product-01-02.jpg").default}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <p href="">SKU: asdf101</p>
                                        <p href="">Availability:3 in Stock</p>
                                        <div className="rating">
                                            <span>
                                                <FaStar />
                                            </span>
                                            <span>
                                                <FaStar />
                                            </span>
                                            <span>
                                                <FaStar />
                                            </span>
                                            <span>
                                                <FaStar />
                                            </span>
                                            <span>
                                                <FaStarHalfAlt />
                                            </span>
                                        </div>
                                    </div>
                                    <h2>
                                        Relaxed-Fit Cotton Shirt
                                    </h2>
                                    <div className="trendingItem-price">$12.00</div>
                                    <p className="trendingItem-text">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="trendingItem-options">
                                        <div className="color-text">color:</div>
                                        <ul className="color-option">
                                            <li className="tooltip ">
                                                <span class="tooltiptext">Grey</span>
                                                <button className="active">
                                                    <img
                                                        src={require("../assets/product-01.jpg").default}
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Green</span>
                                                <button>
                                                    <img
                                                        src={require("../assets/product-01-03.jpg").default}
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="size-text">size:</div>
                                        <ul className="size-option">
                                            <li className="">
                                                <button>X</button>
                                            </li>
                                            <li className="">
                                                <button>M</button>
                                            </li>
                                            <li className="">
                                                <button>S</button>
                                            </li>
                                        </ul>
                                        <div className="color-text">material:</div>
                                        <ul className="color-option">
                                            <li className="tooltip ">
                                                <span class="tooltiptext">Cotton</span>
                                                <button className="active">
                                                    <img
                                                        src={
                                                            require("../assets/texture-img-01.jpg").default
                                                        }
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Silk</span>
                                                <button>
                                                    <img
                                                        src={
                                                            require("../assets/texture-img-02.jpg").default
                                                        }
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">Fabrics</span>
                                                <button>
                                                    <img
                                                        src={
                                                            require("../assets/texture-img-03.jpg").default
                                                        }
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="trendingItem-button">
                                        <div className="item-button">

                                            <div className="cart-count">
                                            <span onClick={()=>{setAboutCount(Math.max(aboutCount - 1, 1));}}>-</span>
                                                <span>{aboutCount}</span>
                                                <span onClick={()=>{setAboutCount(Math.min(aboutCount + 1, 3));}}>+</span>
                                             
                                            </div>
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
            </div>
        </>
    );
};
export default About;
