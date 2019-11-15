import React, { useState } from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import Quote from "../components/quote"
import LanguageSwitch from "../components/language-switch"

const AboutPage = ({ data }) => {
  const markupEnglish = () => (
    <>
      <p>
        "Vulnerability is always the right choice cause it is easy to be cold in
        a world that makes it so very difficult to be soft" wrote the prodigious
        Rupi Kaur. I believe that creativity is authorising oneself to be
        vulnerable, and not trying to create something beautiful but rather
        create something real by being as intimate as possible.
        <Quote
          who="Rupi Kaur"
          quote="Vulnerability is always the right choice cause it is easy to be cold in a world that makes it so very difficult to be soft"
        />
        Why have I chosen music? I do not have a clear-cut answer, it has always
        been ingrained in me. Music to me is a way of reflecting humanity’s
        nature and highlighting how our world is moving forward. When I sing, I
        achieve this indescribable state of wellbeing, a sort of fulfilment in
        my guts. My songs are really a space where I can let myself be
        vulnerable. I put my emotions as words on a white sheet of paper: My
        love(s) at first sight, my anxieties, my experiences, impermanence, my
        vision of the world; everything that once made me feel weak but at the
        same time full of life and emotions. In other words: everything that
        makes me feel alive. But most importantly I wish to transmit all these
        emotions to my audience. Baudelaire wrote in his poem l’Albatross, that
        artists are like these birds, it is hard for them to find their place in
        this society, their pulsions often lead them to being outcasts. But like
        these birds that regurgitate their food to feed their babies. Artists
        regurgitates their experiences to feed the world.I also believe it is
        important for an artist to point out the inequalities of our modern
        societies. Busy in our daily life we forget to look at it and stay numb
        or indifferent towards it...
      </p>

      <Img fluid={data.image3.childImageSharp.fluid} />
      <p>
        I grew up on Java in Indonesia. Studying the piano for 8 years led me to
        discover that singing was what made me vibrate more inside. I started
        choir singing at the age of 12, soon after I began writing songs. I have
        been greatly influenced by music during my childhood listening to Jazz
        and Soul. Recently I discovered the poetry in french chanson which I
        adore. I would say my songs are a sort of mix of all these influences.
        My parents, who are in love with music had a great influence on me as
        well, especially my dad who is a multi instrumental musician and who was
        always teaching it to me with love.
      </p>
      <p>
        At the age of 16 I decided to leave my family in Indonesia to move to
        Paris where I could be closer to the artistic scene. After graduating
        from a literary french baccalauréat, I double majored in International
        Relations and Music, and chose to pursue an artistic path. Living alone
        at such a young age, thousands of miles from my roots and confronted
        with unexpected hurdles has strengthened my personality. It made realize
        the importance of choosing difficulty over comfort, because that is
        where the real beauty is to be found.
      </p>

      <Img fluid={data.image2.childImageSharp.fluid} />
      <p>
        Everywhere one goes, one reads or hears that happiness is about
        fulfilling one’s dream. What no one ever mentions is the hard work and
        the sacrifices it takes to reach that goal. Since I’ve started my
        musical path, I have faced many failures, but the difficulties and
        challenges taught me to overcome my shame over and over again. I have
        learnt that the artistic world is a constant battle in which one has to
        open and reveal oneself. And this is what I’m trying to show through my
        songs in the most accurate and authentic way.
      </p>
    </>
  )

  const markupFrench = () => (
    <>
      <p>
        «Le choix de la vulnérabilité est toujours le bon, car il est facile
        d’être froid dans un monde où il est de plus en plus difficile de rester
        doux», écrit Rupi Kaur.
        <Quote
          who="Rupi Kaur"
          quote="Le choix de la vulnérabilité est toujours le bon, car il est facile d’être froid dans un monde où il est de plus en plus difficile de rester doux"
        />
        Je suis convaincue que la créativité nait lorsque l’artiste s’autorise à
        être vulnérable, qu’il n’essaye plus de créer du « beau » mais du « vrai
        » et lorsqu’il se plonge dans son intimité pour en partager les emotions
        avec le public. Pourquoi la musique ? Je n’ai pas de réponse précise, ça
        a toujours été comme pour de nombreux artistes quelque chose d’ancré en
        moi. La musique pour moi, c'est une manière de refléter la nature
        humaine, de mettre en lumière la manière dont notre monde évolue. Quand
        je chante, j’ai des frissons et ressens jusque dans mes tripes une
        émotion qui s’empare de moi. Mes chansons sont vraiment un espace où je
        peux m’autoriser à être vulnérable, où j’habille mes émotions avec des
        mots. Je raconte mes coups de foudre, mes expériences, mes angoisses,
        mes échecs, l’impermanence, ma vision sur notre monde, mes idéaux. Tout
        ce qui m’a un jour fait sentir toute petite, mais vivante. Mais le plus
        important pour moi c’est de transmettre ces émotions au public. Dans son
        poème L’Albatros, Baudelaire compare l’artiste à cet oiseau, dont les
        pulsions et la créativité le met en marge de la société. Comme l’oiseau
        qui régurgite dans ses entrailles sa nourriture pour nourrir ces petits,
        l’artiste régurgite dans ses entrailles ses experiences pour nourrir le
        monde, c’est ainsi qu’il trouve sa place. Souvent surchargés et
        distraits par nos vies, nous avons tendance à ne plus faire attention,
        voir à devenir indifférent devant les crises et les incoherences de nos
        sociétés modernes et je suis également intimement convaincue qu’il est
        important pour un artiste de mettre en lumière ces enjeux.
      </p>

      <Img fluid={data.image3.childImageSharp.fluid} />
      <p>
        J’ai grandi a Java et après avoir étudié le piano classique pendant 8
        ans j’ai découvert que c’était plutôt le chant qui me faisait vibrer.
        J’ai intégré une chorale à l’âge de 12 ans, et peu de temps après j’ai
        commencé à écrire mes propres chansons. J’ai grandement été influencé
        par la Pop, la Soul et le Jazz pendant mon enfance, et récemment j’ai
        découvert la chanson française qui est si poétique. Je dirais que mes
        chansons sont une sorte de mixte de toutes ces influences. Mes parents,
        amoureux de la musique ont eu une grande influence sur moi, surtout mon
        père multiinstrumentiste, qui n’a cessé de me la faire découvrir au fil
        des années.
      </p>
      <p>
        À l’âge de 16 ans, j’ai quitté mon foyer multiculturel pour déménager à
        Paris, avec pour but de me rapprocher du monde artistique. Vivre seule à
        un si jeune âge, être à des milliers de kilomètres de mes racines,
        devoir me confronter à des défis inattendus ont forge ma personnalité,
        enracine en moi cette notion de résilience à la difficulté, et m ont
        convaincue de l’importance d’aller où elle réside, car c’est là que l’on
        trouve les plus belles choses enfouies. Après mon baccalauréat
        littéraire, j’ai intégré un double cursus en Relations International et
        en Musique, et après avoir obtenu ma licence je décide de me
        professionnaliser en art.
      </p>

      <Img fluid={data.image2.childImageSharp.fluid} />
      <p>
        On entend souvent dire que pour atteindre le « Bonheur » il faut être
        épanoui dans ce qu’on fait mais on ne nous parle jamais de tous les
        sacrifices nécessaires pour y arriver. Depuis que j’ai commencé la
        musique, j’ai dû faire face à de nombreux échecs, encore et encore, mais
        cela m’a permis d’aller au-delà de ma gêne, de mes propres barrières
        mentales. J’ai appris qu’au-delà de l’art le monde artistique est une
        bataille constante où l’on doit se montrer, se révéler, et c’est ce que
        je tente de faire ici, dans ma musique, et dans tout ce que je fais,
        dans la manière la plus précise et authentique.
      </p>
    </>
  )

  const [lang, setLang] = useState("en")

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
            <h1>About Me</h1>

            <LanguageSwitch
              onClickEn={() => setLang("en")}
              onClickFr={() => setLang("fr")}
              activeLang={lang}
            />
          </div>

          <div className="inner">
            <Quote
              who="Arnaud Vernet"
              what="Chanteur, Auteur et Compositeur, Metteur en Scène et Coach"
              quote="Aretha porte dans sa voix la tendresse et la délicatesse de ceux qui chante avec leur coeur. 
                    Elle a cette façon de partager ce qui la touche.  Elle mets les gens qui l'écoute dans sa confidence.
                    Il y a dans ses chansons une évidence qui s'impose.
                    Elle nous apporte un peu de merveilleux et de fragilité dans un monde trop rude.
                    Elle nous autorise à être vulnérable."
            />
            <Quote
              who="Cecil L. Recchia"
              what="French Jazz vocalist and coach"
              quote="Avec un prénom pareil Aretha devait être prédestinée à chanter. 
              J’ai eu l’occasion de la compter parmi mes élèves à l’école Atla à Paris, où pendant un an elle s’est initiée au jazz vocal dans mon cours. 
              Jeune femme d’abord timide, je l’ai vue se muer en une chanteuse élégante  dont la voix sait se faire puissante et caressante sans jamais trahir la belle simplicité qui la caractérise. 
              Ce fut un réel plaisir de travailler avec elle. Je lui souhaite de poursuivre sur sa belle lancée."
            />

            <Img fluid={data.image1.childImageSharp.fluid} />

            {lang === "en" ? markupEnglish() : markupFrench()}
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
