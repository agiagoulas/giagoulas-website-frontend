import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import GalleryImage from "./image";
import Masonry from "react-masonry-css";

export default function SimpleGallery({ images }) {
    const [toggler, setToggler] = useState(false);

    const imagesList = []
    images.forEach(image => {
        imagesList.push(image.image)
    });

    function openLightboxOnSlide(number) {
        this.setState({
            lightboxController: {
                toggler: !this.state.lightboxController.toggler,
                slide: number
            }
        });
    }

    return (
        <>
            <Masonry
                breakpointCols={3}
                className="flex gap-4"
                columnClassName=""
            >
                {images.map((image) =>
                    <img src={image.image}></img>
                    // <GalleryImage src={image.image} metadata={image.metadata} key={image.image} onClick={() => setToggler(!toggler)} />
                )}
            </Masonry>
            <FsLightbox
                toggler={toggler}
                sources={imagesList}
                type="image"
            />
        </>

    );
}
