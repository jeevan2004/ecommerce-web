import React from 'react';
import SellerItem from "../Seller/SellerItem";
import  sellerProduct  from "./SellerProduct";
import "../../App.css"

const Seller = () => {

    let item = sellerProduct;
    return (
        <>
             <section className="trending" id="trending">
                <div className="container">
                    <div className="trending-heading text-center pb-4">
                        <h1>Trending</h1>
                        <p>Top Views In This Week</p>
                    </div>
                    <div className="row trendingMain">

                        {item.map((curItem) => {
                            return <SellerItem key={curItem.id} {...curItem} />
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Seller
