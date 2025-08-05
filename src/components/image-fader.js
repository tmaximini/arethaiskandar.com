import React, { useState, useEffect } from "react"
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

  useEffect(() => {
    if (images && images.length > 0) {
      const timer = setTimeout(() => {
        setIsReady(true)
      }, 100)
      
      // Fallback timer in case images don't load properly
      const fallbackTimer = setTimeout(() => {
        setIsReady(true)
      }, 2000)
      
      return () => {
        clearTimeout(timer)
        clearTimeout(fallbackTimer)
      }
    }
  }, [images])

  useInterval(() => {
    setActive((active + 1) % images.length)
  }, isReady ? 3000 : null)

  return (
    <div>
      <ShadowOverlay />
      {images.map((img, idx) => {
        return (
          <FullScreenImage key={idx} isActive={idx === active}>
            <GatsbyImage image={img.node.childImageSharp.gatsbyImageData} alt="" />
          </FullScreenImage>
        )
      })}
    </div>
  )
}

export default ImageFader
