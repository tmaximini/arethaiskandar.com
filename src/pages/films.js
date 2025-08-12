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
      title: "Madame Héros",
      year: 2025,
      cover: "cover-madame-heros.png",
      vimeos: ["https://vimeo.com/1106397533"],
      screenings: ["Festival du Film de Demain"]
    },
    {
      title: "Après l'été",
      year: 2024,
      cover: "cover-apres-lete.png",
      vimeos: ["https://vimeo.com/1106397590"],
      screenings: [
        "Festival les Égaluantes de Maxime Delauney (Nolita Production)",
        "Cin'été une fois, Barneville-Carteret"
      ]
    },
    {
      title: "Sous mon cœur, feux d'artifice",
      year: 2024,
      cover: "cover-sous-mon-coeur.png",
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
      cover: "cover-tes-mon-amour.png",
      vimeos: ["https://vimeo.com/1106397556"],
      screenings: ["Festival du Film de Demain"]
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
          if (!coverImage) return null
          
          return (
            <GridItem key={film.title}>
              <GatsbyImage
                image={getImage(coverImage.childImageSharp.gatsbyImageData)}
                alt={`${film.title} cover`}
                loading="eager"
                objectFit="cover"
              />
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