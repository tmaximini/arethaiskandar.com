import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenModal from "../components/fullscreen-modal"

const StillsPage = ({ data: { stills } }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Force images to load and clear any stuck placeholder states
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true)

      // Force a repaint to ensure images are rendered properly
      const images = document.querySelectorAll("[data-gatsby-image-wrapper]")
      images.forEach((img) => {
        const picture = img.querySelector("picture")
        if (picture) {
          // Trigger a reflow to ensure proper rendering
          picture.style.display = "none"
          // eslint-disable-next-line no-unused-vars
          const forceReflow = picture.offsetHeight // Force reflow
          picture.style.display = ""
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const openModal = (image, alt) => {
    setSelectedImage({ image, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <Layout showBackdrop>
      <SEO
        title="Film Stills"
        description="Film stills from Aretha Iskandar's cinematographic work. Visual glimpses into the poetic, intimate filmmaking of this French-Indonesian filmmaker, featuring scenes from her award-winning short films."
      />

      <section className="photogrid">
        {stills.nodes.map((still, index) => (
          <GridItem key={still.name}>
            <GatsbyImage
              key={`${still.name}-${imagesLoaded}`}
              image={getImage(still.childImageSharp.gatsbyImageData)}
              alt=""
              loading="eager"
              objectFit="cover"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div className="table">
              <div className="vert-center">
                <button
                  onClick={() =>
                    openModal(
                      getImage(
                        still.childImageSharp.fullscreen ||
                          still.childImageSharp.gatsbyImageData
                      ),
                      ""
                    )
                  }
                  className="show-gallery"
                >
                  <span>View Fullscreen</span>
                </button>
              </div>
            </div>
          </GridItem>
        ))}
      </section>

      {selectedImage && (
        <FullscreenModal
          image={selectedImage.image}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </Layout>
  )
}

export default StillsPage

export const query = graphql`
  query StillsPage {
    stills: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "stills" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 400
            height: 225
            quality: 85
            formats: [AUTO, WEBP]
            placeholder: BLURRED
          )
          fullscreen: gatsbyImageData(
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
