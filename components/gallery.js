import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import GalleryImage from "./image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function SimpleGallery({ images }) {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const imagesList = []
    images.forEach(image => {
        imagesList.push(image.image)
    });

    function openLightbox(index) {
        console.log(index);
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1
        });
    }

    return (
        <>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}
            >
                <Masonry
                    columnsCount={3}
                    gutter="1rem"
                >
                    {images.map((image, index) =>
                        <GalleryImage src={image.image} metadata={image.metadata} key={image.image} onClick={() => openLightbox(index)} />
                    )}
                </Masonry >
            </ResponsiveMasonry>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={imagesList}
                slide={lightboxController.slide}
                type="image"
            />
        </>
    );
}
