import React, { useState } from "react"

import Layout from "../components/layout"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import LanguageSwitch from "../components/language-switch"

const Films = () => {
  const [lang, setLang] = useState("en")

  const filmsData = [
    {
      title: "Après l'été",
      year: 2024,
      vimeos: [
        "https://vimeo.com/1106397590"
      ],
      screenings: [
        "Festival les Égaluantes de Maxime Delauney (Nolita Production)",
        "Cin'été une fois, Barneville-Carteret"
      ]
    },
    {
      title: "Alex",  
      year: 2022,
      vimeos: [
        "https://vimeo.com/1106396816"
      ],
      screenings: [
        "Prix des écoles, Nikon Film Festival",
        "Diffusion Brut X",
        "Festival Bleu, Paris",
        "Rencontres du court-métrage",
        "Festival des 24 courts",
        "Cantania Film Festival",
        "Halicarnassus Film Festival",
        "3 minutes chrono",
        "Les Invizibles Film Festival"
      ]
    },
    {
      title: "Raphael",
      year: 2020,
      awards: [
        "Cinemadamare: Best Screen Play, Best Actor (Italy)"
      ],
      screenings: [
        "Roma Prisma Film Awards, Rome",
        "Dumboo Film Festival, New York", 
        "Snowdance Independent Film Festival, Essen",
        "Berlin Lift off Film Festival, Berlin",
        "Paris Filmmaker, Paris",
        "Paris Play Film Festival, Paris",
        "ARFF Paris"
      ],
      distribution: [
        "Acquired by: Gonella Production",
        "Distribution: Dekkoo Platform"
      ]
    },
    {
      title: "Sous mon cœur, feux d'artifice",
      year: 2024,
      screenings: [
        "Lift off Film Festival London (2025)",
        "Nikon Film Festival",
        "Sélection Pop Woman Festival",
        "Cinemas des nouveaux monde", 
        "Projection ambassade de New Delhi",
        "Festival Devenir Réalisateur",
        "Festival des nouveaux Cinémas"
      ]
    },
    {
      title: "T'es mon amour",
      year: 2025,
      vimeos: [
        "https://vimeo.com/1106397556"
      ],
      screenings: [
        "1 minute de court"
      ]
    },
    {
      title: "Madame Héros", 
      year: 2025,
      vimeos: [
        "https://vimeo.com/1106397533"
      ],
      screenings: [
        "1 minute de court"
      ]
    }
  ]

  const markupEnglish = () => (
    <>
      <p>
        A collection of short films exploring human relationships, vulnerability, and identity through intimate storytelling and poetic visual style.
      </p>
      
      {filmsData.map((film, index) => (
        <div key={index} className="film-section">
          <h3>{film.title} ({film.year})</h3>
          
          {film.vimeos && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Watch</h4>
              <div className="vimeo-embeds">
                {film.vimeos.map((vimeo, i) => {
                  const vimeoId = vimeo.split('/').pop()
                  return (
                    <div key={i} className="vimeo-embed" style={{ marginBottom: '20px' }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${vimeoId}`}
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', minHeight: '400px' }}
                      ></iframe>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {film.awards && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Awards & Recognition</h4>
              <ul className="film-list">
                {film.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>
          )}
          
          {film.screenings && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Festival Screenings</h4>
              <ul className="film-list">
                {film.screenings.map((screening, i) => (
                  <li key={i}>{screening}</li>
                ))}
              </ul>
            </div>
          )}
          
          {film.distribution && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Distribution</h4>
              <ul className="film-list">
                {film.distribution.map((dist, i) => (
                  <li key={i}>{dist}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  )

  const markupFrench = () => (
    <>
      <p>
        Une collection de courts-métrages explorant les relations humaines, la vulnérabilité et l'identité à travers une narration intime et un style visuel poétique.
      </p>
      
      {filmsData.map((film, index) => (
        <div key={index} className="film-section">
          <h3>{film.title} ({film.year})</h3>
          
          {film.vimeos && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Regarder</h4>
              <div className="vimeo-embeds">
                {film.vimeos.map((vimeo, i) => {
                  const vimeoId = vimeo.split('/').pop()
                  return (
                    <div key={i} className="vimeo-embed" style={{ marginBottom: '20px' }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${vimeoId}`}
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', minHeight: '400px' }}
                      ></iframe>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {film.awards && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Prix & Reconnaissance</h4>
              <ul className="film-list">
                {film.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>
          )}
          
          {film.screenings && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Sélections Festival</h4>
              <ul className="film-list">
                {film.screenings.map((screening, i) => (
                  <li key={i}>{screening}</li>
                ))}
              </ul>
            </div>
          )}
          
          {film.distribution && (
            <div className="film-subsection">
              <h4 className="film-subsection-title">Distribution</h4>
              <ul className="film-list">
                {film.distribution.map((dist, i) => (
                  <li key={i}>{dist}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  )

  return (
    <Layout light showBackdrop>
      <SEO
        title="Films"
        description="Explore the filmography of Aretha Iskandar, award-winning French-Indonesian filmmaker and actress. From Raphael (acquired by Dekkoo) to recent works, discover her poetic cinema screened at international festivals."
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
            <h1>Films</h1>

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

export default Films