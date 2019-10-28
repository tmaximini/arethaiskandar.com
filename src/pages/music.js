import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <div className="content">
      <Tilt bgImage={"aretha2.jpg"} />
      <h2 className="content__title">Music</h2>
    </div>
  </Layout>
)

export default MusicPage
