import React from 'react';
import Slider from "react-slick";
import background_1 from "../../assets/slide-01.jpg";
import background_2 from "../../assets/slide-02.jpg";

const Slick = () => {
    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div id="home">
                <div className="container-fluid p-0">
                    <Slider {...settings}>
                        <div >
                            <div style={{
                                backgroundImage: `url(${background_1})`,
                                backgroundSize: "cover",
                            }} className="slide-img">
                                <div className="container">
                                    <div className="slide-content">
                                        <h3>Multipropes</h3>
                                        <h1>Premium
                                            <br />
                                            React Template
                                        </h1>
                                        <p>30 skins, powerful features, great support, exclusive offer</p>
                                        <a href="/" className="btn btn-primary btn-xl">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div style={{
                                backgroundImage: `url(${background_2})`,
                                backgroundSize: "cover",
                            }} className="slide-img">
                                <div className="container">
                                    <div className="slide-content">
                                        <h3>Ready To</h3>
                                        <h1> Use Unique
                                            <br />
                                            Demos
                                        </h1>
                                        <p>Optimized for speed, website that sells</p>
                                        <a href="/" className="btn btn-primary btn-xl">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Slick
