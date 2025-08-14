import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenModal from "../components/fullscreen-modal"

const FilmsPage = ({ data }) => {
  const [selectedFilm, setSelectedFilm] = useState(null)

  const filmsData = [
    {
      title: "T'es mon amour",
      year: 2025,
      cover: "cover-tes-mon-amour.png",
      vimeos: ["https://vimeo.com/1106397556"],
      screenings: ["2025: 1 minute de court"]
    },
    {
      title: "Madame Héros",
      year: 2025,
      cover: "cover-madame-heros.png",
      vimeos: ["https://vimeo.com/1106397533"],
      screenings: ["2025: 1 minute de court"]
    },
    {
      title: "Sous mon cœur, feux d'artifice",
      year: 2024,
      cover: "cover-sous-mon-coeur.png",
      vimeos: ["https://vimeo.com/1106397125"],
      screenings: [
        "2025: Lift off Film Festival Londres",
        "2024: Nikon Film Festival",
        "2024: Séléction Pop Woman Festival",
        "2024: Cinemas des nouveaux monde", 
        "2024: Projection ambassade de New Delhi",
        "2024: Festival Devenir Réalisateur",
        "2024: Festival des nouveaux Cinémas"
      ]
    },
    {
      title: "Après l'été",
      year: 2024,
      cover: "cover-apres-lete.png",
      vimeos: ["https://vimeo.com/1106397590", "https://vimeo.com/1106398077", "https://vimeo.com/1106397787"],
      screenings: [
        "2024: Festival les Égaluantes de Maxime Delauney (Nolita Production)",
        "2024: Cin'été une fois, Barneville-Carteret"
      ]
    },
    {
      title: "Alex",
      year: 2022,
      cover: "cover-alex.png",
      vimeos: ["https://vimeo.com/1106396816"],
      awards: ["2022: Prix des écoles, Nikon Film Festival"],
      screenings: [
        "2022: Diffusion Brut X",
        "2022: Festival Bleu, Paris",
        "2022: Rencontres du court-métrage",
        "2022: Festival des 24 courts",
        "2022: Cantania Film Festival",
        "2022: Halicarnassus Film Festival",
        "2022: 3 minutes chrono",
        "2022: Les Invizibles Film Festival"
      ]
    },
    {
      title: "Raphael",
      year: 2020,
      cover: "cover-raphael.jpg",
      vimeos: ["https://vimeo.com/542312117/159d4cb95f"],
      awards: [
        "2021: Cinemadamare - Best Screenplay, Best Actor (Italy)"
      ],
      acquisition: "Achat: Gonella Production, Diffusion: Dekkoo Platform",
      screenings: [
        "2021: Roma Prisma Film Awards, Rome",
        "2021: Dumboo Film Festival, New York",
        "2021: Cinemadamare, Italy",
        "2021: Snowdance Independent Film Festival, Essen",
        "2021: Berlin Lift off Film Festival, Berlin",
        "2021: Paris Filmmaker, Paris",
        "2021: Paris Play Film Festival, Paris",
        "2021: ARFF Paris"
      ]
    }
  ]

  const openModal = (film) => {
    setSelectedFilm(film)
  }

  const closeModal = () => {
    setSelectedFilm(null)
  }

  const getCoverImage = (coverName) => {
    return data.covers.nodes.find(node => node.name === coverName.replace('.png', ''))
  }

  return (
    <Layout showBackdrop>
      <SEO
        title="Films"
        description="Explore the filmography of Aretha Iskandar, award-winning French-Indonesian filmmaker and actress. From Raphael (acquired by Dekkoo) to recent works, discover her poetic cinema screened at international festivals."
      />
      
      <section className="photogrid">
        {filmsData.map((film, index) => {
          const coverImage = getCoverImage(film.cover)
          
          return (
            <GridItem key={film.title}>
              {coverImage ? (
                <GatsbyImage
                  image={getImage(coverImage.childImageSharp.gatsbyImageData)}
                  alt={`${film.title} cover`}
                  loading="eager"
                  objectFit="cover"
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#404040',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  <h3 className="placeholder-title" style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    transition: 'opacity 0.3s ease'
                  }}>
                    {film.title}
                  </h3>
                  <p className="placeholder-year" style={{ 
                    margin: 0, 
                    fontSize: '1rem',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease'
                  }}>
                    {film.year}
                  </p>
                </div>
              )}
              <div className="table">
                <div className="vert-center">
                  <div className="film-overlay">
                    <h3 className="film-title">{film.title}</h3>
                    <button
                      onClick={() => openModal(film)}
                      className="show-gallery"
                    >
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </GridItem>
          )
        })}
      </section>

      {selectedFilm && (
        <FullscreenModal
          onClose={closeModal}
          customContent={
            <div className="film-modal-content" style={{ 
              width: '90vw', 
              maxWidth: '1200px',
              padding: '2rem',
              color: 'white'
            }}>
              <div className="film-modal-header" style={{ 
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                <h2 style={{ margin: 0, color: 'white' }}>{selectedFilm.title} ({selectedFilm.year})</h2>
              </div>
              
              {selectedFilm.vimeos && (
                <div className="film-modal-section" style={{ 
                  marginBottom: '3rem'
                }}>
                  <div className="vimeo-embeds">
                    {selectedFilm.vimeos.map((vimeo, i) => {
                      const vimeoId = vimeo.split('/').pop()
                      return (
                        <div key={i} className="vimeo-embed" style={{ 
                          position: 'relative',
                          width: '100%',
                          paddingBottom: '56.25%',
                          height: 0,
                          marginBottom: '1rem'
                        }}>
                          <iframe
                            src={`https://player.vimeo.com/video/${vimeoId}`}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%'
                            }}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {selectedFilm.awards && (
                <div className="film-modal-section" style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: 'white', marginBottom: '1rem' }}>Awards</h3>
                  <ul style={{ color: 'white', lineHeight: '1.6' }}>
                    {selectedFilm.awards.map((award, i) => (
                      <li key={i}>{award}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFilm.acquisition && (
                <div className="film-modal-section" style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: 'white', marginBottom: '1rem' }}>Distribution</h3>
                  <p style={{ color: 'white', lineHeight: '1.6' }}>
                    {selectedFilm.acquisition}
                  </p>
                </div>
              )}

              {selectedFilm.screenings && (
                <div className="film-modal-section">
                  <h3 style={{ color: 'white', marginBottom: '1rem' }}>Festival Screenings</h3>
                  <ul style={{ color: 'white', lineHeight: '1.6' }}>
                    {selectedFilm.screenings.map((screening, i) => (
                      <li key={i}>{screening}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          }
        />
      )}
    </Layout>
  )
}

export default FilmsPage

export const query = graphql`
  query FilmsPage {
    covers: allFile(
      filter: { 
        sourceInstanceName: { eq: "images" }
        name: { regex: "/^cover-/" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 400
            height: 225
            quality: 85
            formats: [AUTO, WEBP]
            placeholder: BLURRED
          )
          fullscreen: gatsbyImageData(
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: BLURRED
          )
        }
      }
    }
  }
`