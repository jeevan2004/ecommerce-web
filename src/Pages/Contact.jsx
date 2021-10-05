import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="contact">

                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>/</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="contact-1"><iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d75.65047228361074!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1632893081086!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-2">
                                <div className="contact2-icon">
                                    <FaPhoneAlt />
                                </div>
                                <h1>LET’S HAVE A CHAT!</h1>
                                <p>
                                    +777 2345 7885:
                                    <br />
                                    +777 2345 7886:
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-2">
                                <div className="contact2-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <h1>VISIT OUR LOCATION</h1>
                                <p>
                                    2548 Broaddus Maple Court Avenue,
                                    <br />
                                    Madisonville KY 4783,
                                    <br />
                                    United States of America
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-2">
                                <div className="contact2-icon">
                                    <FaClock />
                                </div>
                                <h1>Work Time</h1>
                                <p>
                                    7 Days a week
                                    <br />
                                    from 10 AM to 6 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form row mt-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea rows="7" className="form-control" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-button">
                                <Link to="404">
                                <button className="btn">Send Message</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact
