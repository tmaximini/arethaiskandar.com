import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data: { news } }) => (
  <Layout showBackdrop>
    <SEO title="News" />
    <section className="photogrid">
      {news.nodes.map(news => (
        <GridItem key={news.slug}>
          <Img fluid={news.cover.childImageSharp.fluid} />
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
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
