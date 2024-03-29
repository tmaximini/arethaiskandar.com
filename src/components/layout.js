/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import Nav from "./nav"

import "./base.css"

const Layout = ({
  children,
  extraComponent,
  customTitle,
  customLink,
  showBackdrop,
  hideTitle,
  light,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
      </Helmet>
      {!hideTitle && (
        <Header
          siteTitle={customTitle || data.site.siteMetadata.title}
          customLink={customLink}
          showBackdrop={showBackdrop}
          light={light}
        />
      )}
      {extraComponent}
      <main className={light ? "main--light" : "main"}>{children}</main>
      <Nav light={light} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
