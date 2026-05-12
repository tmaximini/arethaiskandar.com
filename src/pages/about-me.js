import React, { useState } from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import LanguageSwitch from "../components/language-switch"

const renderParagraphs = (body) => {
  if (!body) return null
  return body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((paragraph, i) => <p key={i}>{paragraph}</p>)
}

const Philosophy = ({ data }) => {
  const page = data.page
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
            <h1>{lang === "en" ? page.title_en : page.title_fr}</h1>

            <LanguageSwitch
              onClickEn={() => setLang("en")}
              onClickFr={() => setLang("fr")}
              activeLang={lang}
            />
          </div>

          <div className="inner">
            {renderParagraphs(lang === "en" ? page.body_en : page.body_fr)}
          </div>
        </TextElement>
      </div>
    </Layout>
  )
}

export default Philosophy

export const query = graphql`
  query {
    page: pagesYaml(name: { eq: "about-me" }) {
      title_en
      title_fr
      body_en
      body_fr
    }
  }
`
