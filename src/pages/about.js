import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  return (
    <Layout light showBackdrop>
      <SEO title="About" />
      <div className="content">
        <TextElement>
          <h3>About Me</h3>
          <div className="inner">
            <p>
              "Vulnerability is always the right choice cause it is easy to be
              cold in a world that makes it so very difficult to be soft" wrote
              the prodigious Rupi Kaur. I believe that creativity is authorising
              oneself to be vulnerable, and not trying to create something&nbsp;
              <i>beautiful</i> but rather create something <i>real</i> by being
              as intimate as possible.
            </p>
            <Img fluid={data.image1.childImageSharp.fluid} />
            <p>
              Why have I chosen music? I do not have a clear-cut answer, it has
              always been ingrained in me. Music to me is a way of reflecting
              humanity’s nature and highlighting how our world is moving
              forward. When I sing, I achieve this indescribable state of
              wellbeing, a sort of fulfilment in my guts. My songs are really a
              space where I can let myself be vulnerable. I put my emotions as
              words on a white sheet of paper: My love(s) at first sight, my
              anxieties, my experiences, impermanence, my vision of the world;
              everything that once made me feel weak but at the same time full
              of life and emotions. In other words: everything that makes me
              feel alive. But most importantly I wish to transmit all these
              emotions to my audience. I also believe it is important for an
              artist to point out the inequalities of our modern societies. Busy
              in our daily life we forget to look at it and stay numb or
              indifferent towards it...
            </p>
            <Img fluid={data.image3.childImageSharp.fluid} />
            <p>
              I grew up on Java in Indonesia. Studying the piano for 8 years led
              me to discover that singing was what made me vibrate more inside.
              I started choir singing at the age of 12, soon after I began
              writing songs. I have been greatly influenced by music during my
              childhood listening to Jazz and Soul. Recently I discovered the
              poetry in french chanson which I adore. I would say my songs are a
              sort of mix of all these influences. My parents, who are in love
              with music had a great influence on me as well, especially my dad
              who is a multi instrumental musician and who was always teaching
              it to me with love.
            </p>
            <p>
              At the age of 16 I decided to leave my family in Indonesia to move
              to Paris where I could be closer to the artistic scene. After
              graduating from a literary french baccalauréat, I double majored
              in International Relations and Music, and chose to pursue an
              artistic path. Living alone at such a young age, thousands of
              miles from my roots and confronted with unexpected hurdles has
              strengthened my personality. It made realize the importance of
              choosing difficulty over comfort, because that is where the real
              beauty is to be found.
            </p>
            <p>
              Everywhere one goes, one reads or hears that happiness is about
              fulfilling one’s dream. What no one ever mentions is the hard work
              and the sacrifices it takes to reach that goal. Since I’ve started
              my musical path, I have faced many failures, but the difficulties
              and challenges taught me to overcome my shame over and over again.
              I have learnt that the artistic world is a constant battle in
              which one has to open and reveal oneself. And this is what I’m
              trying to show through my songs in the most accurate and authentic
              way.
            </p>
            <Img fluid={data.image2.childImageSharp.fluid} />
          </div>
        </TextElement>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "about2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "about3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
