import React, { useState } from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import Quote from "../components/quote"
import LanguageSwitch from "../components/language-switch"

const AboutPage = ({ data }) => {
  return (
    <Layout light showBackdrop>
      <SEO title="About" />
      <div className="content">
        <TextElement>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>Info</h1>
          </div>

          <div className="inner">
            <Quote
              who="Arnaud Vernet"
              what="Chanteur, Auteur et Compositeur, Metteur en Scène et Coach"
              quote="Aretha porte dans sa voix la tendresse et la délicatesse de ceux qui chantent avec leur cœur. Elle a cette façon de partager ce qui la touche. Elle met les gens qui l’écoutent dans sa confidence. Il y a dans ses chansons une évidence qui s’impose. Elle nous apporte un peu de merveilleux et de fragilité dans un monde trop rude. Elle nous autorise à être vulnérables."
            />

            <p>
              French-Indonesian Aretha Iskandar, currectly based in Paris, is a
              rising talent as a singer and composer, despite of her young age.
            </p>
            <Img
              alt="Aretha Iskandar - Info"
              title="Aretha Iskandar"
              fluid={data.image1.childImageSharp.fluid}
            />
            <p>
              After her baccalaureat she studied music focused on songwriting,
              singing, piano, expression, rhythm, her own creations and
              projects, and got initiated to Soul and Jazz techniques.
            </p>
            <p>
              Studying the piano for more than eight years led her to discover
              that singing was what made her vibrate more inside. She started
              choir singing at the age of twelve, soon after began writing
              songs. She has been greatly influenced by music during her
              childhood listening to Swing and Soul, later studying Jazz, Pop
              and Broadway. Since her move from Indonesia to Paris Aretha
              discovered the poetry in French chanson which she adores. The mix
              of these influences give her compositions their own personal sound
              and language.
            </p>
            <Quote
              who="Cecil L. Recchia"
              what="French Jazz vocalist and coach"
              quote="Avec un prénom pareil Aretha devait être prédestinée à chanter. 
              J’ai eu l’occasion de la compter parmi mes élèves à l’école Atla à Paris, où pendant un an elle s’est initiée au jazz vocal dans mon cours. 
              Jeune femme d’abord timide, je l’ai vue se muer en une chanteuse élégante  dont la voix sait se faire puissante et caressante sans jamais trahir la belle simplicité qui la caractérise. 
              Ce fut un réel plaisir de travailler avec elle. Je lui souhaite de poursuivre sur sa belle lancée."
            />
            <p>
              Paris has given Aretha the opportunity to perform in several
              venues such as the Sunset Jazz Club, 38 Riv or Le Baltar, just to
              name a few. Other concert activities brought her to Normandy with
              concerts i.e. at La Potiniere, before she went on her first tour
              to Germany in summer 2018. Besides of her successful showcase at
              Munich’s renown festival KLANGfest Aretha and her band performed
              in such venues as the legendary club The Village or Lump, Stein &
              Küchenmeister.
            </p>
            <p>
              Since summer 2019 Aretha is exclusively signed to ACT Music
              Publishing and will develop her future projects in close relation.
            </p>
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
