import React from "react"
import { graphql } from "gatsby"

import ImageFader from "../components/image-fader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allImages } }) => {
  return (
    <Layout hideTitle extraComponent={<ImageFader images={allImages.edges} />}>
      <SEO title="Home" />
      <div className="content--home">
        {/* <Tilt /> */}

        <div className="logo-svg">
          <div className="logo--inner"></div>
        </div>
        <p className="content__tagline">Soul, Jazz, Chanson</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Index {
    allImages: allFile(
      sort: { fields: name }
      filter: { sourceInstanceName: { eq: "startImages" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 65, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
