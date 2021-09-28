import React, { useState } from 'react';
import products from "./products";
import { FaShoppingCart, FaEye, FaRegHeart, FaBalanceScale, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Items = ({ id, img1, img2, img3, title, name, price, tooltip1, tooltip2, size1, size2, size3, colorImg1, colorImg2, colorImg3 }) => {

    const [cartCount, setCartCount] = useState();
    

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="trendingItem">
                    <div className="trendingItem-img">
                        <div className="trending-img-icon icon-1"><FaEye /></div>
                        <div className="trending-img-icon icon-2"> <FaRegHeart /></div>
                        <div className="trending-img-icon icon-3"> <FaBalanceScale /></div>
                        <div className="trending-img-location"><span>Featured</span></div>
                        <div>
                            <div className="img-active">
                                <Link to={`/trendingPage/${id}`}>
                                <img src={img1} alt="" />
                                </Link>
                            </div>
                            <div className="img-hover">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="trendingItem-content">
                        <div className="trendingItem-name">
                            <a href="/">{title}</a>
                            <div className="rating">
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStarHalfAlt /></span>
                            </div>
                        </div>
                        <h2>
                            <a href="/">{name}</a>
                        </h2>
                        <div className="trendingItem-price">{price}</div>
                        <div className="trendingItem-options">
                            <ul className="color-option">
                                <li className="tooltip ">
                                    <span class="tooltiptext">{tooltip1}</span>
                                    <button className="active">
                                        <img src={img1} alt="" />
                                    </button>
                                </li>
                                <li className="tooltip">
                                    <span class="tooltiptext">{tooltip2}</span>
                                    <button>
                                        <img src={img3} alt="" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="size-option">
                                <li className="">
                                    <button>
                                        {size1}
                                    </button>
                                </li>
                                <li className="">
                                    <button>
                                        {size2}
                                    </button>
                                </li>
                                <li className="">
                                    <button>
                                        {size3}
                                    </button>
                                </li>
                            </ul>
                            <ul className="color-option">
                                <li className="tooltip ">
                                    <span class="tooltiptext">Cotton</span>
                                    <button className="active">
                                        <img src={colorImg1} alt="" />
                                    </button>
                                </li>
                                <li className="tooltip">
                                    <span class="tooltiptext">Silk</span>
                                    <button>
                                        <img src={colorImg2} alt="" />
                                    </button>
                                </li>
                                <li className="tooltip">
                                    <span class="tooltiptext">Fabrics</span>
                                    <button>
                                        <img src={colorImg3} alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="trendingItem-button">
                            <div className="item-button">
                                <button className="cart-button btn btn-primary" onClick={()=>{
                                    setCartCount(cartCount + 1)
                                }}>
                                    <FaShoppingCart className="cart-button-icon" />
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Items
