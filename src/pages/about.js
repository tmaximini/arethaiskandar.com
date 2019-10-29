import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import SEO from "../components/seo"

import styled from "styled-components"

const TextElement = styled.div`
  text-align: left;
  margin: 40px 10px 60px 10px;
  font-weight: 300;
  padding: 10px;
  max-width: 1000px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  -webkit-font-smoothing: antialiased !important;
  font-size: 1.1rem;
  line-height: 1.625;
  color: #e2e2e2 !important;
  max-height: 80vh;
  box-sizing: border-box;
  overflow: auto;

  &:before {
    background-color: rgba(0, 0, 0, 0.66);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    z-index: -1;
  }
`

const ABoutPage = () => (
  <Layout showBackdrop>
    <SEO title="About" />
    <div className="content">
      <Tilt bgImage={"about.jpg"} />
      <h2 className="content__title">About</h2>
      <TextElement>
        <div className="inner">
          <p>
            "Vulnerability is always the right choice cause it is really to be
            cold in a world that makes it so very difficult to be soft" wrote
            the prodigious Rupi Kaur. I believe that creativity is authorising
            oneself to be vulnerable, and not trying to create something
            ‘’beautiful’’ but rather trying to create something ‘’real’’ by
            being the more intimate as possible.
          </p>
          <p>
            Why have I chosen music? I do not have a clear-cut answer, it has
            always been ingrained in me. Music to me is a way of reflecting
            humanity’s nature and highlighting how our world is moving forward.
            When I sing, I achieve this indescribable state of wellbeing, a sort
            of fulfilment in my guts. My songs are really a space where I can
            let myself be vulnerable. I put into words on a white sheet of paper
            every sensitive emotions: My love(s) at first time, my anxieties, my
            first experiences, impermanence, my vision of the world. Everything
            that once made me feel weak but at the same time full of vivacity
            and emotions. In other words everything that once made me feel
            alive. But most importantly I wish to transmit all these emotions to
            my audience. I believe it is important for an artist to point out
            the foibles of our modern societies. Busy in our world we forget to
            look at it and stay numb or indifferent towards it.
          </p>
          <p>
            I grew up in Indonesia, studying the piano for 8 years let me to
            discover that singing was what made me vibrate more inside. I
            started choir singing at the age of 12, soon after I began writing
            songs. I have been greatly influenced by Pop/Soul and jazz music
            during my childhood, and recently discovered the poetry in french
            chanson. I would say my songs is a sort of mix of all these
            influences. At the age of 16 I decided to leave my multicultural
            family to move alone to Paris where I could be closer to the
            artistic scene. Living alone at such a young age, being a thousand
            miles from my roots and confronted to unexpected hurdles has
            strengthen my personality, and ingrained in me this notion of
            resistance to difficulty, the importance of going where the
            difficulty is, because that is where the real beauty is. After
            graduating from a literary french baccalauréat, I double majored in
            International Relations and Music, and chose to pursue on the
            artistic path. Everywhere one goes, one reads or hears that
            happiness is about fulfilling one’s dream. What no one ever mentions
            is the hardwork and the sacrifices it takes to reach that happiness.
            Since I’ve started my musical path, I have failures a lot of times,
            but it teaches me to overcome my shame over and over again. I have
            learnt that the artistic world is a constant battle in which one has
            to open and reveal itself. And this is what I’m trying to do here,
            through my songs and wherever I am, I always try to do in the most
            accurate and authentic way.
          </p>
        </div>
      </TextElement>
    </div>
  </Layout>
)

export default ABoutPage
