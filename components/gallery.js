import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function SimpleGallery({ images, title, description }) {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const imagesList = []
    images.forEach(image => {
        imagesList.push(image["url"])
    });

    function openLightbox(index) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1
        });
    }

    return (
        <>
            <div className="mb-4">
                <div className="text-center mx-auto w-2/3 mb-4">
                    <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                    <p>{description}</p>
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}>
                    <Masonry columnsCount={3} gutter="1rem">
                        {images.map((image, index) =>
                            <img src={image["url"]} width='100%' onClick={() => openLightbox(index)} alt={image.image} key={image.image} />
                        )}
                    </Masonry >
                </ResponsiveMasonry>
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={imagesList}
                    slide={lightboxController.slide}
                    type="image"
                />
            </div>
        </>
    );
}
