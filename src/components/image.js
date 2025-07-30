import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)
  return image ? <GatsbyImage image={image} alt="" /> : null
}

export default Image
