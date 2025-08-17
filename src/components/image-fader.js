import React, { useState, useEffect, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import FullScreenImage from "./fullscreen-image"

import useInterval from "../hooks/useInterval"

const ShadowOverlay = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
`

const ImageFader = ({ images }) => {
  const [active, setActive] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const firstImageLoadedRef = useRef(false)

  // Ensure we're on the client side and avoid SSR/hydration issues
  useEffect(() => {
    setIsMounted(true)
    
    if (images && images.length > 0) {
      // Mark as ready immediately on client side to show first image
      setIsReady(true)
    }
  }, [images])

  // Handle image load event for the first image to ensure it's ready before starting interval
  const handleFirstImageLoad = () => {
    if (!firstImageLoadedRef.current) {
      firstImageLoadedRef.current = true
    }
  }

  useInterval(() => {
    // Only start rotating after component is mounted and first image is ready
    if (isMounted && isReady) {
      setActive(prev => (prev + 1) % images.length)
    }
  }, isMounted && isReady ? 4000 : null)

  // Don't render anything until we're on the client side
  if (!isMounted || !images || images.length === 0) {
    return null
  }

  return (
    <div>
      <ShadowOverlay />
      {images.map((img, idx) => {
        const isActiveImage = idx === active
        const isFirstImage = idx === 0
        
        return (
          <FullScreenImage 
            key={idx} 
            isActive={isActiveImage}
            isFirst={isFirstImage}
          >
            <GatsbyImage 
              image={img.node.childImageSharp.gatsbyImageData} 
              alt="" 
              loading={isFirstImage ? "eager" : "lazy"}
              onLoad={isFirstImage ? handleFirstImageLoad : undefined}
            />
          </FullScreenImage>
        )
      })}
    </div>
  )
}

export default ImageFader
