import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const GalleryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StillImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-image-wrapper {
    max-width: 90vw !important;
    max-height: 90vh !important;
    width: auto !important;
    height: auto !important;
    position: static !important;
  }

  .gatsby-image-wrapper img {
    object-fit: contain !important;
    position: static !important;
  }
`

const NavButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  z-index: 60;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%) scale(1.1);
  }

  &:focus {
    outline: none;
    border-color: #75cca4;
  }

  ${props => props.direction === 'prev' ? 'left: 2rem;' : 'right: 2rem;'}
`

const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 60;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border-color: #75cca4;
  }
`

const ImageCounter = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  z-index: 60;
  backdrop-filter: blur(10px);
`

const StillsGallery = ({ images, currentIndex: initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [onClose])

  return (
    <GalleryContainer>
      <ImageContainer>
        {images.map((image, index) => (
          <StillImage key={index} isActive={index === currentIndex}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={`Still ${index + 1}`}
            />
          </StillImage>
        ))}
      </ImageContainer>
      
      <NavButton direction="prev" onClick={prevImage}>
        ‹
      </NavButton>
      
      <NavButton direction="next" onClick={nextImage}>
        ›
      </NavButton>
      
      <CloseButton onClick={onClose}>
        ×
      </CloseButton>
      
      <ImageCounter>
        {currentIndex + 1} / {images.length}
      </ImageCounter>
    </GalleryContainer>
  )
}

export default StillsGallery