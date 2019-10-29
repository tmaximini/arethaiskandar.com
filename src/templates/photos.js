import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import GridItem from "../components/grid-item"
import SEO from "../components/seo"

const Photos = ({ data: { photos, images } }) => {
  console.info({ photos, images })
  return (
    <Layout showBackdrop customTitle={photos.title_detail} customLink="/photos">
      <SEO title="Home" />
      <section className="photogrid">
        {images.nodes.map(node => (
          <GridItem key={node.name}>
            <Img fluid={node.childImageSharp.fluid} />
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
