import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import ImageFader from "../components/image-fader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allImages } }) => {
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    window.document.body.style = "overflow: hidden"

    // Preload the SVG to prevent flashing
    const img = new Image()
    img.onload = () => {
      setLogoLoaded(true)
    }
    img.src = "/logos/arethaiskandar.svg"

    // Specify how to clean up after this effect:
    return function cleanup() {
      window.document.body.style = "overflow: auto"
    }
  }, [])

  return (
    <Layout hideTitle extraComponent={<ImageFader images={allImages.edges} />}>
      <SEO
        title="Aretha Iskandar - Filmmaker"
        description="Aretha Iskandar is a French-Indonesian filmmaker. Her award-winning short-films reflect a delicate, personal cinema and have been screened internationally."
      />
      <div className="content--home">
        <div className="logo-svg">
          <a
            href="/films"
            title="Aretha Iskandar - Enter website"
            className={`logo--inner ${logoLoaded ? 'loaded' : ''}`}
          ></a>
        </div>
        <div className="content__text">
          <p className="content__tagline">
            raw authenticity through filmmaking
          </p>
          <p className="content__description">
            Aretha Iskandar is a French-Indonesian filmmaker. Her award-winning
            short-films reflect a delicate, personal cinema and have been
            screened internationally.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Index {
    allImages: allFile(
      sort: { name: ASC }
      filter: { sourceInstanceName: { eq: "startImages" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(quality: 65, width: 1200)
          }
        }
      }
    }
  }
`
