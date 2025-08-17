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
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem 0;
  }
`

const ModalContent = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    max-height: none;
    min-height: auto;
  }
  
  .gatsby-image-wrapper {
    max-width: 90vw !important;
    max-height: 90vh !important;
  }
  
  img {
    object-fit: contain !important;
  }
  
  /* Hide scrollbars while keeping functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`

const CloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 1000000;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border-color: #75cca4;
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
`

const FullscreenModal = ({ image, alt, onClose, customContent }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    // Prevent scrolling on the background
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    // Add class to hide menu button when modal is active
    document.body.classList.add('modal-active')
    
    // Prevent touch scrolling on mobile background only, not on modal content
    const preventTouchMove = (e) => {
      if (e.target === e.currentTarget) {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
      document.body.classList.remove('modal-active')
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onClose])

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {customContent ? (
          customContent
        ) : (
          <GatsbyImage 
            image={image} 
            alt={alt} 
            loading="eager"
            objectFit="contain"
          />
        )}
      </ModalContent>
      <CloseButton onClick={onClose}>
        ×
      </CloseButton>
    </ModalOverlay>
  )
}

export default FullscreenModal