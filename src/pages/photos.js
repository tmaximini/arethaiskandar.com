import React from "react"
import Img from "gatsby-image"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

const PhotosPage = ({ data: { photos } }) => (
  <Layout>
    <SEO title="Music" />
    <div className="content">
      <h2 className="content__title">Photos</h2>
      <div className="inner-content">
        {photos.nodes.map(photo => (
          <GridItem
            key={photo.slug}
            to={photo.slug}
            aria-label={`View photo "${photo.title}"`}
          >
            <Img fluid={photo.cover.childImageSharp.fluid} />
            <span>{photo.title}</span>
          </GridItem>
        ))}
      </div>
    </div>
  </Layout>
)

export default PhotosPage

export const query = graphql`
  query Photos {
    photos: allPhotosYaml {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
