import React from "react"

import Layout from "../components/layout"
import Tilt from "../components/tilt"
import TextElement from "../components/text-element"
import SEO from "../components/seo"
import styled from "styled-components"

const LiveShows = styled.div`
  font-family: "Quicksand", sans-serif;
  width: 100%;
  text-shadow: 2px 2px 2px #323232;

  h1 {
    font-size: 2rem;
  }

  table {
    margin-bottom: 30px;
  }

  td {
    padding: 5px 10px;
    font-weight: bold;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    table {
      margin: 20px auto;
    }
  }
`

const DatesPage = () => (
  <Layout>
    <SEO title="Dates" />
    <div className="content">
      <Tilt bgImage={"dates.png"} />
      <div
        style={{
          height: "calc(100vh - 80px)",
          overflow: "auto",
          color: "white",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LiveShows>
          <h1>Live Shows</h1>
          <h3>Upcoming</h3>

          <table></table>

          <h3>Past</h3>

          <table>
            <tr>
              <td>10/03/2020</td>
              <td>Madame Simone, Paris</td>
            </tr>
            <tr>
              <td>05/03/2020</td>
              <td>Culture Rapide, Paris</td>
            </tr>

            <tr>
              <td>03/02/2020</td>
              <td>L'Étage, Paris </td>
            </tr>
            <tr>
              <td>19/12/2019</td>
              <td>La Manufacture de la chanson, Paris</td>
            </tr>
            <tr>
              <td>11/07/2019</td>
              <td>L'escale, Normandie</td>
            </tr>
            <tr>
              <td>07/06/2019</td>
              <td>Village, Habach</td>
            </tr>
            <tr>
              <td>04/07/2019</td>
              <td>La potinière, Normandie</td>
            </tr>
            <tr>
              <td>09/06/2019</td>
              <td>Lump Stein & Küchenmeister, Munich</td>
            </tr>
            <tr>
              <td>08/06/2019</td>
              <td>Klangfest festival, Munich</td>
            </tr>
            <tr>
              <td>12/04/2018</td>
              <td>Sunset Jazz Club, Paris</td>
            </tr>
            <tr>
              <td>04/07/2018 </td>
              <td>La potinière, Normandie</td>
            </tr>
          </table>
        </LiveShows>
      </div>
    </div>
  </Layout>
)

export default DatesPage
