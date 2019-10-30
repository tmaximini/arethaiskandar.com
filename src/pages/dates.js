import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

const DatesPage = () => (
  <Layout>
    <SEO title="Dates" />
    <div className="content">
      <Tilt bgImage={"dates.jpg"} />
      <h2 className="content__title">Dates</h2>
    </div>
  </Layout>
)

export default DatesPage
