import React from "react"

import styled from "styled-components"

const TextElement = styled.div`
  text-align: left;
  margin: 60px 10px 60px 10px;
  font-weight: 300;
  padding: 10px;
  max-width: 1000px;
  width: calc(100% - 20px);
  min-height: 80vh;
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased !important;
  font-size: 1.2rem;
  line-height: 1.625;
  color: var(--color-bg);
  box-sizing: border-box;
  overflow: auto;

  h1 {
    position: relative;
    margin: 20px 0;
    font-size: 1.5em;
    border-bottom: 2px solid var(--color-bg);

    // &:after {
    //   content: "";
    //   background-color: var(--color-bg);
    //   position: absolute;
    //   bottom: -2px;
    //   left: 0;
    //   width: 100px;
    //   height: 2px;
    //   display: block;
    // }
  }

  .gatsby-image-wrapper,
  p {
    margin: 20px 0;
    &::-moz-selection,
    &::selection,
    &::-webkit-selection {
      background-color: #75cca4;
      color: #f2f2f2;
    }
  }

  .gatsby-image-wrapper {
    margin: 2rem 0;
  }

  .inner {
    min-height: 80%;
  }

  .inner a {
    color: var(--color-info) !important;
    border-bottom: 1px dotted var(--color-info);
  }
`

export default TextElement
