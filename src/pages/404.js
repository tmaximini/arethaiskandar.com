import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="NotFound" />
    <div className="content">
      <Tilt bgImage={"about.jpg"} />
      <h2 className="content__title">404</h2>
      <p className="content__tagline">
        Oooops - you hit a page that does not exist!
        <br />
        <a href="/">Go to start page</a>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
