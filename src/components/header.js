import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, customLink, light, showBackdrop }) => (
  <h1
    className={light ? "logo-header__title title--light" : "logo-header__title"}
  >
    <Link to={customLink || "/"}>{siteTitle}</Link>
  </h1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
