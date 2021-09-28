import React from 'react'

const Collection = () => {
    return (
        <>
            <section className="collection" id="portfolio">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <a href="/" className="collection-box">
                                <img src={require("../../assets/index-promo-img-07.jpg").default} alt="" />
                                <div className="collection-inner">
                                    <div className="collection-content">
                                        <h1>FALL-WINTER CLEARANCE SALES</h1>
                                        <p>GET UP TO
                                            <span>50% off</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <a href="/" className="collection-box">
                                <img src={require("../../assets/index-promo-img-08.jpg").default} alt="" />
                                <div className="collection-inner">
                                    <div className="collection-content">
                                        <h1>SUMMER <span> 2018 </span></h1>
                                        <p>NEW ARRIVALS
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <a href="/" className="collection-box">
                                <img src={require("../../assets/index-promo-img-09.jpg").default} alt="" />
                                <div className="collection-inner">
                                    <div className="collection-content">
                                        <h1>NEW COLLECTION</h1>
                                        <p> <span> HANDBAGS </span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Collection
