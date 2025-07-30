import React, { useState } from "react"

import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import LanguageSwitch from "../components/language-switch"

const Press = () => {
  const [lang, setLang] = useState("en")

  const markupEnglish = () => (
    <>
      <p>
        Press coverage, interviews, and media features about Aretha Iskandar's work in cinema and her artistic journey.
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Recent Press Coverage</h3>
        <p><em>Press materials and coverage will be updated here soon.</em></p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Press Kit</h3>
        <p>For press inquiries, interviews, or screening requests, please contact:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@arethaiskandar.com">info@arethaiskandar.com</a>
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>High-Resolution Images</h3>
        <p>Professional stills and promotional images are available upon request for press use.</p>
      </div>

      <div>
        <h3>Film Screener Access</h3>
        <p>Private screener links for press and festival programmers are available upon request.</p>
      </div>
    </>
  )

  const markupFrench = () => (
    <>
      <p>
        Couverture presse, interviews et articles sur le travail d'Aretha Iskandar dans le cinéma et son parcours artistique.
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Couverture Presse Récente</h3>
        <p><em>Les articles et couvertures presse seront mis à jour ici prochainement.</em></p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Dossier de Presse</h3>
        <p>Pour les demandes de presse, interviews ou projections, veuillez contacter :</p>
        <p>
          <strong>Email :</strong> <a href="mailto:info@arethaiskandar.com">info@arethaiskandar.com</a>
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Images Haute Résolution</h3>
        <p>Les photos professionnelles et images promotionnelles sont disponibles sur demande pour usage presse.</p>
      </div>

      <div>
        <h3>Accès aux Films</h3>
        <p>Les liens de visionnage privés pour la presse et les programmateurs de festivals sont disponibles sur demande.</p>
      </div>
    </>
  )

  return (
    <Layout light showBackdrop>
      <SEO
        title="Press"
        description="Press resources for Aretha Iskandar, French-Indonesian filmmaker and actress. Media kit, high-resolution images, and screener access for her award-winning intimate films exploring human vulnerability."
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
            <h1>Press</h1>

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

export default Press