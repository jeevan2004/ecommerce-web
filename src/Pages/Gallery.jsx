
import React from 'react';
import { LightBox } from "react-lightbox-pack"
import "react-lightbox-pack/dist/index.css";
import GalleryData from './GalleryData';

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
        <div>
            <section className="gallery">
                <div className="container">
                    <div className="row">
                        {GalleryData.map((item, index) => (
                            <div className="col-md-4 mb-4">
                                <div className="gallery-img">
                                    <img
                                        key={item.id}
                                        src={item.image}
                                        alt={item.title}
                                     
                                        onClick={() => {
                                            lightBoxHandler(true, index);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
			//Component
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
        </div>
    );
}
export default Gallery