import React, { useState } from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import Quote from "../components/quote"
import LanguageSwitch from "../components/language-switch"

const BioPage = ({ data }) => {
  const markupFr = () => (
    <>
      {" "}
      <h2>Aretha Iskandar - Biographie</h2>
      <Quote
        who="Arnaud Vernet"
        what="Chanteur, Auteur et Compositeur, Metteur en Scène et Coach"
        quote="Aretha porte dans sa voix la tendresse et la délicatesse de ceux qui chantent avec leur cœur. Elle a cette façon de partager ce qui la touche. Elle met les gens qui l’écoutent dans sa confidence. Il y a dans ses chansons une évidence qui s’impose. Elle nous apporte un peu de merveilleux et de fragilité dans un monde trop rude. Elle nous autorise à être vulnérables."
      />
      <p>
        <a href="/about-me" title="About Aretha Iskandar">
          Aretha Iskandar
        </a>
        , Aretha Iskandar, jeune Franco-Indonésienne est une
        auteure-compositrice-interprète de 22 ans installée à Paris. Lors de sa
        tournée en Allemagne en 2019 elle séduit le label{" "}
        <a href="https://www.actmusic.com/en">ACT Music</a>, avec lequel elle
        entre en collaboration.
      </p>
      <p>
        À travers ses chansons, elle évoque ses expériences et partage avec nous
        son univers intime teinté de sensibilité et de vulnérabilité. Ses
        mélodies sont le plus souvent douces, mais peuvent aussi nous emmener
        dans des tempos plus rythmés. Grace à voix envoûtante et son
        authenticité, elle captive le public et le touche en lui exprimant c’est
        coup de coeur, ses angoisses, son brin de folie.
      </p>
      <p>
        C'est après avoir étudié le piano pendant plus de huit ans qu’elle a
        finalement découvert que le chant était ce qui la faisait vraiment
        vibrer. Elle commence à chanter à l'âge de douze ans, et peu après, à
        écrire des chansons. Elle a été grandement influencée par la musique
        durant son enfance en écoutant de la Soul et de la Pop, puis en étudiant
        le Jazz. Depuis son déménagement d'Indonésie à Paris, Aretha a découvert
        la poésie de la chanson française qu'elle adore. Tout en poursuivant ses
        études de Relations Internationales, Aretha se forme à la Manufacture
        Chanson, l'Atla et l'ARPEJ.
      </p>
      <p>
        Aretha s’influence des artistes tels que Katie Melua, Norah Jones,
        Patrick Watson, Joe Bel, Ben Mazué, Barbara, Tim Dup Jacques Brel, Henri
        Salvador, Nina Simone, Radiohead, Adele...
      </p>
      <Quote
        who="Marion Denys"
        quote="Aretha a le sens des mots et ses compositions sont belles, abouties et reflètent sa personnalité. Quand Aretha chante elle y met tout son cœur et elle nous fait voyager simplement et élégamment au fil de ses compositions.
        Aretha investit tout son être dans ses chansons et réussi à nous transmettre des messages, ses messages, à travers de magnifiques mélodies."
      />
      <p>
        Paris a donné à Aretha l’occasion de se produire dans plusieurs lieux
        tels que le{" "}
        <i>
          <a
            href="/photos/sunset-jazz-bar-paris-02-2019"
            title="Aretha Iskandar live at Sunset Jazz Club, Paris"
          >
            Sunset Jazz Club
          </a>
          , le 38 Riv ou le Baltar, L’Étage, La Manufacture de la Chanson
        </i>
        , pour ne nommer que ceux-là. La musique l'a également amenée en
        Normandie avec des concerts, notamment à La Potinière, avant sa première
        tournée en Allemagne en été 2018. En plus de son succès au{" "}
        <a
          href="/photos/klangfest-munich-germany-06-2019"
          title="Aretha Iskandar - live at Klangfest Munich, Photos"
        >
          festival de Munich, le KLANGfest
        </a>
        , Aretha et son groupe se sont produits dans des lieux tels que le
        légendaire club The Village ou Lump, Stein &amp; Küchenmeister.
      </p>
      <Quote
        who="Cecil L. Recchia"
        what="French Jazz vocalist and coach"
        quote="Avec un prénom pareil Aretha devait être prédestinée à chanter. 
  J’ai eu l’occasion de la compter parmi mes élèves à l’école Atla à Paris, où pendant un an elle s’est initiée au jazz vocal dans mon cours. 
  Jeune femme d’abord timide, je l’ai vue se muer en une chanteuse élégante  dont la voix sait se faire puissante et caressante sans jamais trahir la belle simplicité qui la caractérise. 
  Ce fut un réel plaisir de travailler avec elle. Je lui souhaite de poursuivre sur sa belle lancée."
      />
      <Img
        alt="Aretha Iskandar - Info"
        title="Aretha Iskandar"
        fluid={data.image1.childImageSharp.fluid}
      />
    </>
  )

  const markupEn = () => (
    <>
      {" "}
      <h2>Aretha Iskandar - Biography</h2>
      <Quote
        who="Arnaud Vernet"
        what="Coach"
        quote="Aretha carries in her voice the tenderness and the delicacy of those who sing with their hearts. She has her own way of sharing what moves her, which puts the listener in confidence. There is in her songs an obvious necessity. Aretha brings wonder and fragility to our rough world. She allows us to be vulnerable."
      />
      <p>
        French-Indonesian{" "}
        <a href="/about-me" title="About Aretha Iskandar">
          Aretha Iskandar
        </a>
        , currectly based in Paris, is a rising talent as a singer and composer,
        despite of her young age.
      </p>
      <p>
        Through her songs, she evokes her experiences and shares with us her
        intimate musical universe rich with sensitivity and vulnerability. Its
        melodies are most often sweet, but can also convey rhythmic tempos. With
        her alluring voice and authenticity, she always captures the audience
        and expresses her fears, love at first sights and grain of madness.
      </p>
      <p>
        Studying the piano for more than eight years led her to discover that
        singing was what made her vibrate more inside. She started choir singing
        at the age of twelve, soon after began writing songs. After her
        baccalaureat she doubled majored in International Relations and studied
        music focused on songwriting, singing, piano, expression her own
        creations and projects, and got initiated to Soul and Jazz techniques.
        Since her move from Indonesia to Paris Aretha discovered the poetry in
        French chanson which she adores. The mix of these influences give her
        compositions their own personal sound and language.
      </p>
      <p>
        She has been greatly influenced by artists such as Katie Melua, Norah
        Jones, Nina Simone, Ben Mazué, Radiohead, Tim Dup, Adele, Portishead,
        Patrick Watson.
      </p>
      <Quote
        who="Marion Denys"
        quote="Aretha has a sense of words. Her compositions are beautiful, accomplished and reflect her personality. When she sings, Aretha puts all of her heart into her art and takes the listener on an elegant journey. Aretha invests her whole self into her songs, transmitting powerful messages through beautiful melodies."
      />
      <p>
        Paris has given Aretha the opportunity to perform in several venues such
        as the{" "}
        <i>
          <a
            href="/photos/sunset-jazz-bar-paris-02-2019"
            title="Aretha Iskandar live at Sunset Jazz Club, Paris"
          >
            Sunset Jazz Club
          </a>
          , 38 Riv or Le Baltar, L’Étage, La Manufacture de la chanson
        </i>
        , just to name a few. Other concert activities brought her to Normandy
        with concerts i.e. at{" "}
        <a
          href="/photos"
          title="Photos of Aretha playing at La Pontiniere, Normandie"
        >
          La Potiniere
        </a>
        , before she went on her first tour to Germany in summer 2018. Besides
        of her successful{" "}
        <a
          href="/photos/klangfest-munich-germany-06-2019"
          title="Aretha Iskandar - live at Klangfest Munich, Photos"
        >
          showcase at Munich’s renown festival KLANGfest
        </a>{" "}
        Aretha and her band performed in such venues as the legendary club The
        Village or Lump, Stein &amp; Küchenmeister.
      </p>
      <p>
        Since summer 2019 Aretha is exclusively signed to{" "}
        <a href="https://www.actmusic.com/en">ACT Music Publishing</a> and will
        develop her future projects in close relation.
      </p>
      <Quote
        who="Cecil L. Recchia"
        what="French Jazz vocalist and coach"
        quote="With such a name Aretha was predestined to sing. I had the opportunity to have her among my students at the ATLA school in Paris, where she was introduced to vocal jazz for a year. Young woman, at first shy, I saw her turn into an elegant singer whose voice knows how to be powerful and caressing without ever betraying the beautiful simplicity that it conveys. It was a real pleasure working with her. I wish her continued success."
      />
      <Img
        alt="Aretha Iskandar - Info"
        title="Aretha Iskandar"
        fluid={data.image1.childImageSharp.fluid}
      />
    </>
  )

  const [lang, setLang] = useState("fr")

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
            <h1>Bio</h1>
            <LanguageSwitch
              onClickEn={() => setLang("en")}
              onClickFr={() => setLang("fr")}
              activeLang={lang}
            />
          </div>

          <div className="inner">{lang === "en" ? markupEn() : markupFr()}</div>
        </TextElement>
      </div>
    </Layout>
  )
}

export default BioPage

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
