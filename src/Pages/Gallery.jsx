
import React from 'react';
import { LightBox } from "react-lightbox-pack"
import "react-lightbox-pack/dist/index.css";
import GalleryData from './GalleryData';
import { FaRegImage } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Gallery = () => {
    // State
    const [toggle, setToggle] = React.useState(false);
    const [sIndex, setSIndex] = React.useState(0);

    // Handler
    const lightBoxHandler = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    return (
        <>
            <Navbar />
            <section className="gallery">
                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>/</li>
                            <li>Portfolio</li>
                        </ul>
                    </div>

                </div>
                <div className="container">
                    <div className="portfolio-heading text-center pb-4">
                        <h1>The Portfolio</h1>

                    </div>
                    <div className="row">
                        {GalleryData.map((item, index) => (
                            <div className="col-md-4 mb-4">
                                <div className="gallery-box" onClick={() => {
                                    lightBoxHandler(true, index);
                                }}>
                                    <div className="gallery-img">
                                        <img key={item.id} src={item.image} alt={item.title} />
                                        <div className="gallery-img-icon">
                                            <FaRegImage />
                                        </div>
                                    </div>
                                    <div className="gallery-content">
                                        <div className="gallery-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LightBox
                state={toggle}
                event={lightBoxHandler}
                data={GalleryData}
                imageWidth="60vw"
                imageHeight="70vh"
                thumbnailHeight={50}
                thumbnailWidth={50}
                setImageIndex={setSIndex}
                imageIndex={sIndex}
            />
            <Footer />
        </>
    );
}
export default Gallery