import React, { useState } from 'react';
import Items from "./Items";
import { products } from "./Products";
import "../../App.css"
const Trending = () => {
    const [item, setItem] = useState(products);



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

export default Trending
