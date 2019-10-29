import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, customLink, showBackdrop }) => (
  <h1
    className={
      showBackdrop ? "logo-header__title backdrop-header" : "logo-header__title"
    }
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
