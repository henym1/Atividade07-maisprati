import React, { useState } from "react";

import "../css/Gallery.css"

// Exercício 8 - Galeria de Imagens com Visualização Detalhada

function Gallery() {

    const images = [
        { id: 1, src: "../src/assets/Terraria1.jpg", alt: 'Imagem 1' },
        { id: 2, src: "../src/assets/Terraria2.jpg", alt: 'Imagem 2' },
        { id: 3, src: "../src/assets/Terraria3.jpg", alt: 'Imagem 3' },
        { id: 4, src: "../src/assets/Terraria4.jpg", alt: 'Imagem 4' },
        { id: 5, src: "../src/assets/Terraria5.jpg", alt: 'Imagem 5' },
        { id: 6, src: "../src/assets/Terraria6.jpg", alt: 'Imagem 6' },
    ]

    const [selectedImage, setSelectedImage] = useState(null)

    function openModal(image) {
        setSelectedImage(image)
    }

    function closeModal() {
        setSelectedImage(null)
    }

    function goToPrevious() {
        if (selectedImage) {
            const currentIndex = images.findIndex(img => img.id === selectedImage.id)
            const previousIndex = (currentIndex - 1 + images.length) % images.length
            setSelectedImage(images[previousIndex])
        }
    }

    function goToNext() {
        if (selectedImage) {
            const currentIndex = images.findIndex(img => img.id === selectedImage.id)
            const nextIndex = (currentIndex + 1) % images.length
            setSelectedImage(images[nextIndex])
        }
    }

    return (
        <>
            <section id="ex08">
                <div className="gallery-thumbnails">
                    {images.map(image => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            onClick={() => openModal(image)}
                            className="thumbnail"
                        />
                    ))}
                </div>

                {selectedImage && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button className="close-btn" onClick={closeModal}>Fechar</button>
                            <button id="prevButton" className="nav-btn" onClick={goToPrevious}>←</button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="modal-image"
                            />
                            <button id="nextButton" className="nav-btn" onClick={goToNext}>→</button>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Gallery
