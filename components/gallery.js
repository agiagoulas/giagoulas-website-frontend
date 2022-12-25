import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
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
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}>
                <Masonry columnsCount={3} gutter="1rem">
                    {images.map((image, index) =>
                        <img src={image.image} width='100%' onClick={() => openLightbox(index)} alt={image.image} />
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
