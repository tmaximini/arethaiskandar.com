import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import GridItem from "../components/grid-item"
import SEO from "../components/seo"
import VideoGridItem from "../components/video-grid-item"

const News = ({ data: { news, images } }) => {
  console.log({ news })

  return (
    <Layout showBackdrop customTitle={news.title_detail} customLink="/news">
      <SEO title={`News | ${news.title_detail}`} />
      <section className="photogrid">
        {images.nodes.map(node => {
          return (
            <GridItem noEffect key={node.name}>
              <Img fluid={node.childImageSharp.fluid} />
            </GridItem>
          )
        })}

        {news.translation_fr && (
          <GridItem noEffect key="translation_fr">
            <div className="table">
              <div className="table--inner">
                <p>{news.translation_fr}</p>
                {news.translation_en && <p>{news.translation_en}</p>}
              </div>
            </div>
          </GridItem>
        )}
        {news.videos &&
          news.videos.map(vid => (
            <VideoGridItem
              key={vid}
              videoSrcURL={vid}
              videoTitle="Official Music Video on YouTube"
            />
          ))}
        {news.soundclouds &&
          news.soundclouds.map(sc => (
            <GridItem noEffect key="soundcloud">
              <div className="table">
                <div className="table--inner">
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    allow="autoplay"
                    src={sc}
                  ></iframe>
                </div>
              </div>
            </GridItem>
          ))}
        <GridItem noEffect key="dossier-pdf">
          <div style={{ backgroundColor: "white", padding: "20px 0" }}>
            <a
              title="download dossier de presse pdf"
              href="/arethaiskandar-dossier-de-presse.pdf"
            >
              <img src="/dossier.png" />
            </a>
          </div>
        </GridItem>
      </section>
    </Layout>
  )
}

export default News

export const query = graphql`
  query NewsTemplate($slug: String!, $images: String!) {
    news: newsYaml(slug: { eq: $slug }) {
      title_detail
      desc
      slug
      videos
      soundclouds
      translation_en
      translation_fr
      parent {
        ... on File {
          modifiedTime
          birthTime
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
