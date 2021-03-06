import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const BlogPage = () => {
    return (
        <>
        <Navbar/>
            <section className="blogPage" id="blog">
                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>/</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="Blog-heading text-center pb-4">
                        <h1>The Blog</h1>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-main">
                                <div className="blog-img">
                                    <img src={require("../assets/blog-post-img-07.jpg").default} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-content-inner">
                                        <a href="/" className="blog-name">Fashion</a>
                                        <h1><a href="/">ENIM AD MINIM VENIAM QUIS NOSTRUD ULLAMCO LABORIS NISI</a></h1>
                                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                                        <div className="blog-author">
                                            by
                                            <a href="/"> ADMIN </a>
                                            on January 20, 2021
                                            <div className="blog-comment">
                                                0
                                                <FaRegComment className="blog-comment-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/***********************Blog-2*********************** */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-main">
                                <div className="blog-img">
                                    <img src={require("../assets/blog-masonry-img-04.jpg").default} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-content-inner">
                                        <a href="/" className="blog-name">DESIGN</a>
                                        <h1><a href="/">ULLAMCO LABORIS NISI ALIQUIP COMMODO</a></h1>
                                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                                        <div className="blog-author">
                                            by
                                            <a href="/"> KB AIRF </a>
                                            on January 20, 2021
                                            <div className="blog-comment">
                                                0
                                                <FaRegComment className="blog-comment-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/************************Blog-3****************************** */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-main">
                                <div className="blog-img">
                                    <img src={require("../assets/blog-post-img-05.jpg").default} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-content-inner">
                                        <a href="/" className="blog-name">SALE</a>
                                        <h1><a href="/">FUGIATNULLA PARIATUR LOREM</a></h1>
                                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                                        <div className="blog-author">
                                            by
                                            <a href="/"> TASNIM </a>
                                            on January 20, 2021
                                            <div className="blog-comment">
                                                0
                                                <FaRegComment className="blog-comment-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/***********************Blog-4*********************** */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-main">
                                <div className="blog-img">
                                    <img src={require("../assets/blog-post-img-02.jpg").default} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-content-inner">
                                        <a href="/" className="blog-name">Fashion</a>
                                        <h1><a href="/">ENIM AD MINIM VENIAM QUIS NOSTRUD ULLAMCO LABORIS NISI</a></h1>
                                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                                        <div className="blog-author">
                                            by
                                            <a href="/"> ADMIN </a>
                                            on January 20, 2021
                                            <div className="blog-comment">
                                                0
                                                <FaRegComment className="blog-comment-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/***********************Blog-5*********************** */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-main">
                                <div className="blog-img">
                                    <img src={require("../assets/blog-post-img-03.jpg").default} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-content-inner">
                                        <a href="/" className="blog-name">DESIGN</a>
                                        <h1><a href="/">ULLAMCO LABORIS NISI ALIQUIP COMMODO</a></h1>
                                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                                        <div className="blog-author">
                                            by
                                            <a href="/"> KB AIRF </a>
                                            on January 20, 2021
                                            <div className="blog-comment">
                                                0
                                                <FaRegComment className="blog-comment-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/************************Blog-6****************************** */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-main">
                                <div className="blog-img">
                                    <img src={require("../assets/blog-post-img-04.jpg").default} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-content-inner">
                                        <a href="/" className="blog-name">SALE</a>
                                        <h1><a href="/">FUGIATNULLA PARIATUR LOREM</a></h1>
                                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua.</p>
                                        <div className="blog-author">
                                            by
                                            <a href="/"> TASNIM </a>
                                            on January 20, 2021
                                            <div className="blog-comment">
                                                0
                                                <FaRegComment className="blog-comment-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default BlogPage
