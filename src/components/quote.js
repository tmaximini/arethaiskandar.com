import React from "react"
import styled from "styled-components"

const QuoteEl = styled.article`
  background-color: rgba(146, 165, 156, 0.16);
  padding 10px;
  margin: 40px 0;
  box-shadow: 0 5px 15px 0px #c2c2c2;
  blockquote {
    text-align: left;
    font-family: Palatino, "Book Antiqua", Georgia, serif;
    margin: 10px auto;
    font-style: italic;
    font-size: 1em;
    line-height: 1.8em;
  }
  .author {
    color: #535252;
    margin: 10px 0;
  }
  .author--name {
      text-align: right;
      display: block;
      font-size: 0.9em;
  }
  .author--profession {
    text-align: right;
    display: block;
    font-size: 0.8em;
}
`

const Quote = ({ who, what, quote }) => (
  <QuoteEl>
    <blockquote>{quote}</blockquote>
    <div className="author">
      <span className="author--name">{who}</span>
      <span className="author--profession">{what}</span>
    </div>
  </QuoteEl>
)
export default Quote
