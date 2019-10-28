import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Photos = ({ data: { photos, images } }) => {
  console.info({ photos, images })
  return (
    <div>
      <h1>photos</h1>
    </div>
  )
}

export default Photos

export const query = graphql`
  query PhotosTemplate($slug: String!, $images: String!) {
    photos: photosYaml(slug: { eq: $slug }) {
      title_detail
      color
      category
      desc
      slug
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
