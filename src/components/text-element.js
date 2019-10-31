import React from "react"

import styled from "styled-components"

const TextElement = styled.div`
  text-align: left;
  margin: 40px 10px 60px 10px;
  font-weight: 300;
  padding: 10px;
  max-width: 1000px;
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased !important;
  font-size: 1.2rem;
  line-height: 1.625;
  color: var(--color-bg);
  box-sizing: border-box;
  overflow: auto;

  h3 {
    position: relative;

    &:after {
      content: "";
      background-color: var(--color-bg);
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100px;
      height: 2px;
      display: block;
    }
  }

  .gatsby-image-wrapper,
  p {
    margin: 20px 0;
  }

  .inner a {
    color: var(--color-info) !important;
  }
`

export default TextElement
