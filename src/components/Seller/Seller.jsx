import React, { useState } from 'react';
import Items from "../Trending/Items";
import { sellerProduct } from "./SellerProduct";
import "../../App.css"

const Seller = () => {
    const [item, setItem] = useState(sellerProduct);
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
                            return <Items key={curItem.id} {...curItem} />
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Seller
