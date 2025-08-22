import React, { useState } from "react"

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import Quote from "../components/quote"
import LanguageSwitch from "../components/language-switch"

const Philosophy = ({ data }) => {
  const markupEnglish = () => (
    <>
      <p>
        Aretha Iskandar is a French-Indonesian filmmaker based in Paris. She crafts emotionally charged, intimate films that explore human relationships, vulnerability, and identity. Most of her work were made in France, Germany and Italy.
      </p>
      <p>
        Her debut short Raphael (2020), filmed in Berlin, received multiple awards and was acquired by the U.S. platform Dekkoo. In 2021, she co-directed ALEX in Italy, which won a jury prize at the Nikon Film Festival and was selected for the Marché du Film at the Cannes Film Festival. It was also broadcast on BrutX and continues to screen internationally.
      </p>
      <p>
        Following this recognition, she received a writing grant from the CNC and co-directed Après l'été (2023), in which she also acts. That same year, she directed Ordinary Violence, acquired by Formeweb TV and 7 Palms Entertainment, and later broadcast on MyTF1.
      </p>
      <p>
        In 2024, she directed Sous mon cœur, feux d'artifice (fireworks under my heart) as part of the Nikon Film Festival. This film depicts the Middle East conflict through children's eyes. Her work is marked by a poetic visual style and a deep focus on emotional truth.
      </p>
      <p>
        In 2025, she won 2nd place on a pitching contest for her short film On se retrouve au Kebab and has directed two really short films T'es mon amour and Madame Héros, that got selected for the festival Festival du Film de Demain.
      </p>
      <p>
        <a href="/bio" title="Aretha Iskandar - Biography">
          Read my Biography
        </a>
      </p>
    </>
  )

  const markupFrench = () => (
    <>
      <p>
        Aretha Iskandar est une réalisatrice et comédienne franco-indonésienne basée à Paris. Elle développe un cinéma intime et émotionnel, centré sur les relations humaines, la vulnérabilité et les identités en mouvement. Ses court-métrages ont majoritairement été tournés en Italie, en Allemagne et en France.
      </p>
      <p>
        Son premier court-métrage, Raphael (2020), tourné à Berlin, a reçu plusieurs prix en festivals et a été acquis par la plateforme américaine Dekkoo. En 2021, elle co-réalise ALEX en Italie, qui remporte un prix du jury au Nikon Film Festival, est sélectionné au Marché du Film du Festival de Cannes, et diffusé sur BrutX. Le film continue de circuler à l'international.
      </p>
      <p>
        Suite à cette reconnaissance, elle obtient une bourse d'écriture du CNC. En 2023, elle co-réalise Après l'été, dans lequel elle joue également. Elle tourne la même année Ordinary Violence, acquis par Formeweb TV et 7 Palms Entertainment, et diffusé sur MyTF1.
      </p>
      <p>
        En 2024, elle réalise Sous mon cœur, feux d'artifice dans le cadre du Nikon Film Festival. Ce film parle du conflit au moyen orient, vu à travers le prisme de l'enfant. Son travail se distingue par une esthétique poétique et une attention particulière à la vérité émotionnelle.
      </p>
      <p>
        En 2025, elle remporte le second prix lors du concours d'Event pitch pour son film On se retrouve au Kebab? . Elle réalise également deux très court-métrages T'es mon amour et Madame Héros, sélectionné au Festival du film de demain.
      </p>
      <p>
        <a href="/bio" title="Aretha Iskandar - Biography">
          Read my Biography
        </a>
      </p>
    </>
  )

  const [lang, setLang] = useState("en")

  return (
    <Layout light showBackdrop>
      <SEO
        title="About Me"
        description="Discover Aretha Iskandar, French-Indonesian filmmaker and director crafting emotionally charged, intimate films exploring human relationships and vulnerability. Award-winning short films screened internationally."
      />
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
            <h1>About Me</h1>

            <LanguageSwitch
              onClickEn={() => setLang("en")}
              onClickFr={() => setLang("fr")}
              activeLang={lang}
            />
          </div>

          <div className="inner">
            {lang === "en" ? markupEnglish() : markupFrench()}
          </div>
        </TextElement>
      </div>
    </Layout>
  )
}

export default Philosophy

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 100, formats: [AUTO, WEBP])
      }
    }
    image2: file(relativePath: { eq: "about2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 100, formats: [AUTO, WEBP])
      }
    }
    image3: file(relativePath: { eq: "about4.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 100, formats: [AUTO, WEBP])
      }
    }
  }
`
