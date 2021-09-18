import React from 'react'

const Service = () => {
    return (
        <>
            <section className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src={require("../../assets/delivery.png").default} alt="" />
                                </div>
                                <div className="service-text">
                                    <h1>Free Shipping</h1>
                                    <p>Free shipping on all US order or order above $99</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src={require("../../assets/headphones.png").default} alt="" />
                                </div>
                                <div className="service-text">
                                    <h1>Support 24/7</h1>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src={require("../../assets/back-arrow.png").default} alt="" />
                                </div>
                                <div className="service-text">
                                    <h1>30 Days Return</h1>
                                    <p>Simply return it within 24 days for an exchange.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service

