import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotosPage = ({ data: { photos } }) => (
  <Layout showBackdrop>
    <SEO title="Photos" />
    <section className="photogrid">
      {photos.nodes.map(photo => (
        <GridItem key={photo.slug}>
          <Img
            fluid={photo.cover.childImageSharp.fluid}
            title={`Aretha Iskandar - ${photo.title_detail}`}
            alt={`Aretha Iskandar - ${photo.title_detail}`}
          />
          <div className="table">
            <div className="vert-center">
              <h2>{photo.title_detail}</h2>
              <Link
                to={photo.slug}
                aria-label={`View photo "${photo.title_detail}"`}
                className="show-gallery"
              >
                <span>View Photos</span>
              </Link>
            </div>
          </div>
        </GridItem>
      ))}
    </section>
  </Layout>
)

export default PhotosPage

export const query = graphql`
  query Photos {
    photos: allPhotosYaml {
      nodes {
        title
        title_detail
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
