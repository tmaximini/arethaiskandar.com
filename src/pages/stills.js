import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenModal from "../components/fullscreen-modal"

const StillsPage = ({ data: { stills } }) => {
  const [selectedImage, setSelectedImage] = useState(null)

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
        description="Film stills from Aretha Iskandar's cinematographic work. Visual glimpses into the poetic, intimate filmmaking of this French-Indonesian filmmaker and actress, featuring scenes from her award-winning short films."
      />
      
      <section className="photogrid">
        {stills.nodes.map((still, index) => (
          <GridItem key={still.name}>
            <GatsbyImage
              image={getImage(still.childImageSharp.gatsbyImageData)}
              alt={`Film still ${index + 1}`}
            />
            <div className="table">
              <div className="vert-center">
                <button
                  onClick={() => openModal(
                    getImage(still.childImageSharp.fullscreen || still.childImageSharp.gatsbyImageData),
                    `Film still ${index + 1}`
                  )}
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