import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import GridItem from "../components/grid-item"
import SEO from "../components/seo"

const Photos = ({ data: { photos, images } }) => {
  return (
    <Layout showBackdrop customTitle={photos.title_detail} customLink="/photos">
      <SEO title={`Photos | ${photos.title_detail}`} />
      <section className="photogrid">
        {images.nodes.map(node => (
          <GridItem noEffect key={node.name}>
            <GatsbyImage
              image={getImage(node.childImageSharp.gatsbyImageData)}
              title={`Aretha Iskandar - ${photos.title_detail}`}
              alt={`Aretha Iskandar - ${photos.title_detail}`}
            />
          </GridItem>
        ))}
      </section>
    </Layout>
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
    images: allFile(
      sort: { name: ASC }
      filter: { relativePath: { regex: $images } }
    ) {
      nodes {
        name
        extension
        childImageSharp {
          gatsbyImageData(quality: 95, width: 1200, formats: [AUTO, WEBP])
        }
      }
    }
  }
`
