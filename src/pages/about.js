import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

const ABoutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="content">
      <Tilt />
      <h2 className="content__title">Aretha Iskandar</h2>
      <p className="content__tagline">Soul, Jazz, Chanson</p>
    </div>
  </Layout>
)

export default ABoutPage
