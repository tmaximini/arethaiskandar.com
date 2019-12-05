import React, { useEffect } from "react"
import { graphql } from "gatsby"

import ImageFader from "../components/image-fader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allImages } }) => {
  useEffect(() => {
    window.document.body.style = "overflow: hidden"

    // Specify how to clean up after this effect:
    return function cleanup() {
      window.document.body.style = "overflow: auto"
    }
  })

  return (
    <Layout hideTitle extraComponent={<ImageFader images={allImages.edges} />}>
      <SEO
        title="Welcome"
        description="Aretha Iskandar is a french-indonesian Jazz and Soul singer, currently based in Paris, France. Welcome to the personal website of Aretha Iskandar."
      />
      <div className="content--home">
        <div className="logo-svg">
          <a
            href="/music"
            title="Aretha Iskandar - Enter website"
            className="logo--inner"
          ></a>
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
