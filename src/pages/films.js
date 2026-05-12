import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import GridItem from "../components/grid-item"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenModal from "../components/fullscreen-modal"

const basename = (path) => {
  if (!path) return ""
  return path.split("/").pop()
}

const buildVimeoEmbed = (vimeo) => {
  const parts = vimeo.split("/")
  if (parts.length >= 5 && parts[parts.length - 1].length > 8) {
    const videoId = parts[parts.length - 2]
    const hash = parts[parts.length - 1]
    return `https://player.vimeo.com/video/${videoId}?h=${hash}`
  }
  const vimeoId = parts.pop()
  return `https://player.vimeo.com/video/${vimeoId}`
}

const FilmsPage = ({ data }) => {
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true)
      const images = document.querySelectorAll("[data-gatsby-image-wrapper]")
      images.forEach((img) => {
        const picture = img.querySelector("picture")
        if (picture) {
          picture.style.display = "none"
          // eslint-disable-next-line no-unused-vars
          const forceReflow = picture.offsetHeight
          picture.style.display = ""
        }
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const films = [...(data.filmsYaml?.films ?? [])].sort((a, b) => {
    const ao = a.order ?? 9999
    const bo = b.order ?? 9999
    return ao - bo
  })

  const coverByBase = new Map(
    data.covers.nodes.map((node) => [node.base, node])
  )

  const getCoverImage = (coverPath) => {
    if (!coverPath) return null
    return coverByBase.get(basename(coverPath)) || null
  }

  return (
    <Layout showBackdrop>
      <SEO
        title="Films"
        description="Explore the filmography of Aretha Iskandar, award-winning French-Indonesian filmmaker. From Raphael (acquired by Dekkoo) to recent works, discover her poetic cinema screened at international festivals."
      />

      <section className="photogrid">
        {films.map((film) => {
          const coverImage = getCoverImage(film.cover)
          const gatsbyImage =
            coverImage && coverImage.childImageSharp
              ? getImage(coverImage.childImageSharp.gatsbyImageData)
              : null

          return (
            <GridItem key={`${film.title}-${film.year}`}>
              {gatsbyImage ? (
                <GatsbyImage
                  key={`${film.title}-${imagesLoaded}`}
                  image={gatsbyImage}
                  alt={`${film.title} cover`}
                  loading="eager"
                  objectFit="cover"
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#404040",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    padding: "2rem",
                  }}
                >
                  <h3
                    className="placeholder-title"
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "1.5rem",
                      fontWeight: "300",
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {film.title}
                  </h3>
                  <p
                    className="placeholder-year"
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      opacity: 0.8,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {film.year}
                  </p>
                </div>
              )}
              <div className="table">
                <div className="vert-center">
                  <div className="film-overlay">
                    <h3 className="film-title">
                      {film.title} ({film.year})
                    </h3>
                    <button
                      onClick={() => setSelectedFilm(film)}
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
          onClose={() => setSelectedFilm(null)}
          customContent={
            <div
              className="film-modal-content"
              style={{
                width: "90vw",
                maxWidth: "1200px",
                padding: "2rem",
                color: "white",
              }}
            >
              <div
                className="film-modal-header"
                style={{ marginBottom: "2rem", textAlign: "center" }}
              >
                <h2 style={{ margin: 0, color: "white" }}>
                  {selectedFilm.title} ({selectedFilm.year})
                </h2>
              </div>

              {selectedFilm.vimeos && selectedFilm.vimeos.length > 0 && (
                <div
                  className="film-modal-section"
                  style={{ marginBottom: "3rem" }}
                >
                  <div className="vimeo-embeds">
                    {selectedFilm.vimeos.map((vimeo, i) => (
                      <div
                        key={i}
                        className="vimeo-embed"
                        style={{
                          position: "relative",
                          width: "100%",
                          paddingBottom: "56.25%",
                          height: 0,
                          marginBottom: "1rem",
                        }}
                      >
                        <iframe
                          src={buildVimeoEmbed(vimeo)}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedFilm.awards && selectedFilm.awards.length > 0 && (
                <div
                  className="film-modal-section"
                  style={{ marginBottom: "2rem" }}
                >
                  <h3 style={{ color: "white", marginBottom: "1rem" }}>
                    Awards
                  </h3>
                  <ul style={{ color: "white", lineHeight: "1.6" }}>
                    {selectedFilm.awards.map((award, i) => (
                      <li key={i}>{award}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFilm.acquisition && (
                <div
                  className="film-modal-section"
                  style={{ marginBottom: "2rem" }}
                >
                  <h3 style={{ color: "white", marginBottom: "1rem" }}>
                    Distribution
                  </h3>
                  <p style={{ color: "white", lineHeight: "1.6" }}>
                    {selectedFilm.acquisition}
                  </p>
                </div>
              )}

              {selectedFilm.screenings &&
                selectedFilm.screenings.length > 0 && (
                  <div className="film-modal-section">
                    <h3 style={{ color: "white", marginBottom: "1rem" }}>
                      Festival Screenings
                    </h3>
                    <ul style={{ color: "white", lineHeight: "1.6" }}>
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
    filmsYaml {
      films {
        order
        title
        year
        cover
        vimeos
        awards
        screenings
        acquisition
      }
    }
    covers: allFile(
      filter: {
        sourceInstanceName: { eq: "uploads" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
    ) {
      nodes {
        base
        childImageSharp {
          gatsbyImageData(
            width: 400
            height: 225
            quality: 85
            formats: [AUTO, WEBP]
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
