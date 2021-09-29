import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const About = () => {
    return (
        <>
            <Navbar />
            <section className="about">

                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>/</li>
                            <li>About</li>
                        </ul>
                    </div>

                </div>
                <div className="container">
                    <h1>Wokiee is a global fashion destination for 20-somethings. We sell cutting-edge fashion and offer a wide variety of fashion-related content.</h1>
                </div>
                <div className="container-fluid">
                    <div className="row about-img">
                        <div className="col-md-6">
                            <img src={require("../assets/about2-img-01.jpg").default} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={require("../assets/index-promo-img-09.jpg").default} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={require("../assets/about2-img-03.jpg").default} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row about-content">
                        <div className="col-md-6">
                            <h1>OUR STORES</h1>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="col-md-6">
                            <h1>Contact</h1>
                            <p><span>Address:</span>2548 Broaddus Maple Court Avenue, Madisonville KY 4783,United States of America</p>
                            <p><span>Phone:</span>+777 2345 7885: +777 2345 7886</p>
                            <p><span>Hours:</span>7 Days a week from 10 am to 6 pm</p>
                            <p><span>Email:</span>info@mydomain.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About
