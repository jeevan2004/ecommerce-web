import React, {useState} from "react";
import { useParams } from "react-router-dom";
import SellerProducts from "../components/Seller/SellerProduct";
import {
    FaShoppingCart,
    FaEye,
    FaRegHeart,
    FaBalanceScale,
    FaStar,
    FaStarHalfAlt,
} from "react-icons/fa";
const SellerPage = () => {
    const params = useParams();
    console.log(params.id, "bsfkks");
    const [aboutCount, setAboutCount]= useState(1);
    console.log(SellerProducts, "sbfkdj");
    // let getId = products.params.id;
    // const getData= products.item[getId.id];
    // console.log(getData, "data");
    return (
        <>
            {/* <div className="about">
                <div className="container">
                    <div className=" trendingMain">
                        <div className="row trendingItem">
                            <div className=" col-md-6">
                                <div className="trendingItem-img">
                                    <div className="trending-img-icon icon-1">
                                        <FaEye />
                                    </div>
                                    <div className="trending-img-icon icon-2">
                                        
                                        <FaRegHeart />
                                    </div>
                                    <div className="trending-img-icon icon-3">
                                        
                                        <FaBalanceScale />
                                    </div>
                                    <div className="trending-img-location">
                                        <span>Featured</span>
                                    </div>
                                    <div className='img_tab'>
                                        <div className="img-active img_sec">
                                            <img
                                                src={getData.img1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="img-hover img_sec">
                                            <img
                                                src={getData.img2}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="trendingItem-content">
                                    <div className="trendingItem-name">
                                        <p href="">{getData.title}</p>
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
                                        {getData.naem}
                                    </h2>
                                    <div className="trendingItem-price">{getData.price}</div>
                                    <p className="trendingItem-text">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="trendingItem-options">
                                        <div className="color-text">color:</div>
                                        <ul className="color-option">
                                            <li className="tooltip ">
                                                <span class="tooltiptext">{getData.tooltip1}</span>
                                                <button className="active">
                                                    <img
                                                        src={getData.img1}
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                            <li className="tooltip">
                                                <span class="tooltiptext">{getData.tooltip2}</span>
                                                <button>
                                                    <img
                                                        src={getData.img3}
                                                        alt=""
                                                    />
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="size-text">size:</div>
                                        <ul className="size-option">
                                            <li className="">
                                                <button>{getData.size1}</button>
                                            </li>
                                            <li className="">
                                                <button>{getData.size2}</button>
                                            </li>
                                            <li className="">
                                                <button>{getData.size3}</button>
                                            </li>
                                        </ul>
                                        <div className="color-text">material:</div>
                                        <ul className="color-option">
                                            <li className="tooltip ">
                                                <span class="tooltiptext">Cotton</span>
                                                <button className="active">
                                                    <img
                                                        src={
                                                            getData.colorImg1
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
                                                            getData.colorImg2
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
                                                            getData.colorImg3
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
            </div> */}
        </>
    );
};
export default SellerPage;
