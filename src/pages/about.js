import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

const ABoutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="content">
      <Tilt bgImage={"4.jpg"} />
      <h2 className="content__title">About</h2>
    </div>
  </Layout>
)

export default ABoutPage
