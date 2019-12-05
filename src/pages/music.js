import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"
import TextElement from "../components/text-element"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout light showBackdrop>
    <SEO
      title="Music"
      description="Music from Aretha Iskandar. Aretha Iskandar's live concert video from Klangfest Munich. Find the latest songs and recordings from Aretha Iskandar here."
    />
    <div className="content">
      <TextElement>
        <h1>Music</h1>
        <div className="inner">
          <h3>Aretha Iskandar and band</h3>
          <p>Live at Klangfest, Munich, 2019.</p>
          <Video
            videoSrcURL="https://www.youtube.com/embed/DsrUlJoAUjk"
            videoTitle="Live at Klangfest"
          />
          <p>
            Thank you to the talented musicians who accompanied me:{" "}
            <a href="https://www.instagram.com/piwai.k/">
              Pierre-Yves Kerambloch
            </a>
            ,{" "}
            <a href="https://www.instagram.com/cedric.selzer/">Cedric Selzer</a>
            , <a href="https://www.instagram.com/syd_dyens02/">Sydney Diens</a>,{" "}
            <a href="https://www.instagram.com/dorianegmb/">Doriane Gamba</a>.
            Some of the{" "}
            <a href="/news/press">
              news coverage of the concert can be found here
            </a>
            .
          </p>
          <p>
            Thanks for watching - You can{" "}
            <a href="/about-me">find out more about me</a> here.
          </p>
        </div>
      </TextElement>
    </div>
  </Layout>
)

export default MusicPage
