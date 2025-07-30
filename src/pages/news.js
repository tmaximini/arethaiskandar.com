import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data: { news } }) => (
  <Layout showBackdrop>
    <SEO
      title="News"
      description="Latest news about Aretha Iskandar, French-Indonesian filmmaker and actress. Updates on film screenings, festival selections, awards, and interviews about her intimate, emotionally charged cinema."
    />
    <section className="photogrid">
      {news.nodes.map(news => (
        <GridItem key={news.slug}>
          <GatsbyImage image={getImage(news.cover.childImageSharp.gatsbyImageData)} alt="" />
          <div className="table">
            <div className="vert-center">
              <h2>{news.title_detail}</h2>
              <Link
                to={news.slug}
                aria-label={`View news "${news.title_detail}"`}
                className="show-gallery"
              >
                <span>View News</span>
              </Link>
            </div>
          </div>
        </GridItem>
      ))}
    </section>
  </Layout>
)

export default NewsPage

export const query = graphql`
  query News {
    news: allNewsYaml {
      nodes {
        title
        title_detail
        slug
        cover {
          childImageSharp {
            gatsbyImageData(quality: 95, width: 1200, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`
