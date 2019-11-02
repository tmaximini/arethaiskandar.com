import React from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
  height: 50%;
  width: 100%;

  @media screen and (min-width: 53em) {
    width: 50%;
  }

  @media screen and (min-width: 100em) {
    width: 33.33333%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoContainer>
    <iframe
      src={videoSrcURL}
      // title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoContainer>
)
export default Video
