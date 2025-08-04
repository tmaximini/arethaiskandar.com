import React, { useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ModalContent = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
  
  .gatsby-image-wrapper {
    max-width: 90vw !important;
    max-height: 90vh !important;
  }
  
  img {
    object-fit: contain !important;
  }
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
  z-index: 1001;
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

const FullscreenModal = ({ image, alt, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onClose])

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <GatsbyImage image={image} alt={alt} />
      </ModalContent>
      <CloseButton onClick={onClose}>
        ×
      </CloseButton>
    </ModalOverlay>
  )
}

export default FullscreenModal