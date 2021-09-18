import React from 'react'

const Promo = () => {
    return (
        <>
            <div className="promo" id="pages">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6" >
                            <div className="promoMain">
                                <div className="promoMainItem">
                                    <a href="" className="">
                                        <img src={require("../../assets/img-01.jpg").default} alt="" />
                                        <div className="promo-button">Casual</div>
                                    </a>
                                </div>
                                <div className="promoMainItem">
                                    <a href="" className="">
                                        <img src={require("../../assets/img-05.jpg").default} alt="" />
                                        <div className="promo-button">Dresses</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="promoMainItem">
                                <a href="" className="">
                                    <img src={require("../../assets/img-02.jpg").default} alt="" className="promo-img-2" />
                                    <div className="promo-button">Women</div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="promoMainItem">
                                        <a href="" className="">
                                            <img src={require("../../assets/img-03.jpg").default} alt="" />
                                            <div className="promo-button">Shirt</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="promoMainItem">
                                        <a href="" className="">
                                            <img src={require("../../assets/img-04.jpg").default} alt="" />
                                            <div className="promo-button">Men</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="promoMainItem">
                                        <a href="" className="">
                                            <img src={require("../../assets/img-06.jpg").default} alt="" className="promo-img-3" />
                                            <div className="promo-button">Jeans</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Promo
