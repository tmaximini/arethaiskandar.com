import React from "react"
import styled from "styled-components"

const LanguageSwitch = styled.nav`
  text-align: right;
  margin-top: 28px;
  span {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    color: #adadad;
    transition: color 0.16s linear;

    &:hover {
      color: var(--color-bg);
    }
  }
  span.active {
    color: var(--color-bg);
  }
`

const Lang = ({ onClickEn, onClickFr, activeLang }) => (
  <LanguageSwitch>
    <span className={activeLang == "en" ? `active` : ""} onClick={onClickEn}>
      EN
    </span>
    <span className={activeLang == "fr" ? `active` : ""} onClick={onClickFr}>
      FR
    </span>
  </LanguageSwitch>
)
export default Lang
