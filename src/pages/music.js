import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"
import TextElement from "../components/text-element"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout light showBackdrop>
    <SEO title="Music" />
    <div className="content">
      <TextElement>
        <h3>Music</h3>
        <div className="inner">
          <p>Live at Klangfest, Munich, 2019.</p>
          <Video
            videoSrcURL="https://www.youtube.com/embed/DsrUlJoAUjk"
            videoTitle="Live at Klangfest"
          />
        </div>
        <p>
          Thank you to the talented musicians who accompanied me: Pierre-Yves
          Kerambloch, Cedric Selzer, Sydney Diens, Doriane Gamba.
        </p>
      </TextElement>
    </div>
  </Layout>
)

export default MusicPage
