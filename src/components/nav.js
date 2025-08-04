import React, { Component, createRef } from "react"
import { Link } from "gatsby"

export default class Nav extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.domRef = createRef()
    this.openCtrl = createRef()
    this.closeCtrl = createRef()
    this.DOM = {}
    global.allowTilt = true
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    this.DOM.openCtrl = document.querySelector(".action--menu")
    this.DOM.closeCtrl = document.querySelector(".action--close")
    this.DOM.openCtrl.addEventListener("mouseenter", () => {
      global.allowTilt = false
    })
    this.DOM.openCtrl.addEventListener("mouseleave", () => {
      global.allowTilt = true
    })
    // The menu items.
    this.DOM.items = Array.from(document.querySelectorAll(".menu__item"))

    // The total number of items.
    this.itemsTotal = this.DOM.items.length
    // Custom elements that will be animated.
    this.DOM.mainLinks = document.querySelectorAll(
      ".mainmenu > a.mainmenu__item"
    )
    this.DOM.sidemenuLinks = document.querySelectorAll(
      ".sidemenu span.sidemenu__item-inner"
    )
    this.DOM.menulink = document.querySelector(".menu__item-link")
  }

  // Open the menu.
  open() {
    this.toggle("open")
    // document.body.style.overflow = "hidden"
    this.setState({
      open: true,
    })
  }
  // Close the menu.
  close() {
    this.toggle("close")

    // document.body.style.overflow = "auto"
    this.setState({
      open: false,
    })
  }
  toggle(action) {
    if (this.isAnimating) return
    // (dis)allow the main image tilt effect.
    global.allowTilt = action === "open" ? false : true
    this.isAnimating = true
    // After all is animated..
    const animationEnd = (pos) => {
      if (pos === this.itemsTotal - 1) {
        this.isAnimating = false
      }
    }
    if (action === "open") {
      this.DOM.closeCtrl.style.display = "inline"
      setTimeout(() => (this.DOM.openCtrl.style.display = "none"), 500)
    } else {
      this.DOM.openCtrl.style.display = "inline"
      setTimeout(() => (this.DOM.closeCtrl.style.display = "none"), 500)
    }
    // Going through each menu´s item.
    this.DOM.items.forEach((el, pos) => {
      // The inner wrapper.
      const innerEl = el.querySelector(".menu__item-inner")
      // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
      const config = {}
      const configInner = {}
      // Direction defined in the HTML data-direction.
      // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
      const direction = el.dataset.direction
      // Using 101% instead of 100% to avoid rendering problems.
      // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
      if (direction === "bt") {
        config.y = "101%"
        configInner.y = "-101%"
        configInner.x = "0%"
      } else if (direction === "tb") {
        config.y = "-101%"
        configInner.y = "101%"
        configInner.x = "0%"
      } else if (direction === "lr") {
        config.x = "-101%"
        configInner.x = "101%"
      } else if (direction === "rl") {
        config.x = "101%"
        configInner.x = "-101%"
      } else {
        config.x = "101%"
        config.y = "101%"
        configInner.x = "-101%"
        configInner.y = "-101%"
      }

      if (action === "open") {
        // Setting the initial values.
        global.TweenMax.set(el, config)
        global.TweenMax.set(innerEl, configInner)

        // Animate.
        global.TweenMax.to([el, innerEl], 0.9, {
          ease: global.Quint.easeOut,
          x: "0%",
          y: "0%",
          onComplete: () => animationEnd(pos),
        })
      } else {
        global.TweenMax.to(el, 0.6, {
          ease: global.Quart.easeInOut,
          x: config.x || 0,
          y: config.y || 0,
        })
        global.TweenMax.to(innerEl, 0.6, {
          ease: global.Quart.easeInOut,
          x: configInner.x || 0,
          y: configInner.y || 0,
          onComplete: () => animationEnd(pos),
        })
      }
    })

    // Show/Hide open and close ctrls.
    global.TweenMax.to(this.DOM.closeCtrl, 0.6, {
      ease: action === "open" ? global.Quint.easeOut : global.Quart.easeInOut,
      startAt: action === "open" ? { rotation: 0 } : null,
      opacity: action === "open" ? 1 : 0,
      rotation: action === "open" ? 180 : 270,
    })
    global.TweenMax.to(this.DOM.openCtrl, action === "open" ? 0.6 : 0.3, {
      delay: action === "open" ? 0 : 0.3,
      ease: action === "open" ? global.Quint.easeOut : global.Quad.easeOut,
      opacity: action === "open" ? 0 : 1,
    })

    // Main links animation.
    global.TweenMax.staggerTo(
      this.DOM.mainLinks,
      action === "open" ? 0.9 : 0.2,
      {
        ease: action === "open" ? global.Quint.easeOut : global.Quart.easeInOut,
        startAt: action === "open" ? { y: "50%", opacity: 0 } : null,
        y: action === "open" ? "0%" : "50%",
        opacity: action === "open" ? 1 : 0,
      },
      action === "open" ? 0.1 : -0.1
    )

    // Sidemenu links animation.
    global.TweenMax.staggerTo(
      this.DOM.sidemenuLinks,
      action === "open" ? 0.5 : 0.2,
      {
        ease:
          action === "open" ? global.Quint.easeInOut : global.Quart.easeInOut,
        startAt: action === "open" ? { y: "100%" } : null,
        y: action === "open" ? "0%" : "100%",
      },
      action === "open" ? 0.05 : -0.05
    )
  }

  render() {
    const { open } = this.state
    const { light } = this.props
    return (
      <nav ref={this.domRef} className={open ? "menu menu--open" : "menu"}>
        <div className="menu__item menu__item--1" data-direction="bt">
          <div className="menu__item-inner">
            <div className="mainmenu">
              <Link
                to="/"
                className="mainmenu__item"
                activeClassName="mainmenu__item--active"
              >
                Home
              </Link>

              <Link
                to="/films"
                className="mainmenu__item"
                activeClassName="mainmenu__item--active"
              >
                Films
              </Link>
              <Link
                to="/stills"
                className="mainmenu__item"
                activeClassName="mainmenu__item--active"
              >
                Stills
              </Link>
              <Link
                to="/press"
                className="mainmenu__item"
                activeClassName="mainmenu__item--active"
              >
                Press
              </Link>
              <Link
                to="/about-me"
                className="mainmenu__item"
                activeClassName="mainmenu__item--active"
              >
                About Me
              </Link>

              {/* <Link
                to="/news"
                className="mainmenu__item"
                activeClassName="mainmenu__item--active"
              >
                News
              </Link> */}
            </div>
          </div>
        </div>
        <div className="menu__item menu__item--2" data-direction="lr">
          <div className="menu__item-inner">
            <div className="menu__item-map"></div>
          </div>
        </div>
        <div className="menu__item menu__item--3" data-direction="bt">
          <div className="menu__item-inner">
            <div className="sidemenu">
              <a
                href="https://www.instagram.com/arethaiskandar"
                title="Instagram"
                className="sidemenu__item"
              >
                <span className="sidemenu__item-inner">Instagram</span>
              </a>

              <a
                href="https://www.youtube.com/channel/UCICD5lsVNRtPbvCi0sqXZNw"
                title="Youtube Channel"
                className="sidemenu__item"
              >
                <span className="sidemenu__item-inner">Youtube</span>
              </a>

              <a
                href="mailto:info@arethaiskandar.com"
                title="E-Mail"
                className="sidemenu__item"
              >
                <span className="sidemenu__item-inner">Mail</span>
              </a>

              <Link to="/imprint" title="Imprint" className="sidemenu__item">
                <span className="sidemenu__item-inner">Imprint</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="menu__item menu__item--4" data-direction="rl">
          <div className="menu__item-inner">
            <div className="menu__item-photo"></div>
          </div>
        </div>
        <div className="menu__item menu__item--5" data-direction="tb">
          <div className="menu__item-inner">
            {/* <ul>
              <li>05/03/2020, Culture Rapide, Paris</li>
              <li>10/03/2020, Madame Simone, Paris</li>
              <li>19/03/2020, Manufacture de la chanson, Paris</li>
              <li>26/03/2020, Espace Corderie, Paris</li>
              <li>31/03/2020, L'Étage, Paris</li>
            </ul> */}
          </div>
        </div>
        <button
          ref={this.openCtrl}
          onClick={this.open}
          className={
            light ? "action action--menu menu--light" : "action action--menu"
          }
        >
          <svg className="icon icon--menu" id="icon-menu" viewBox="0 0 119 25">
            <path d="M36,8 L36,0 L100,0 L100,8 L36,8 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z M0,28 L0,20 L71,20 L71,28 L0,28 Z" />
          </svg>
        </button>
        <button
          ref={this.closeCtrl}
          onClick={this.close}
          className="action action--close"
        >
          <svg className="icon icon--close" id="icon-close" viewBox="0 0 24 24">
            <path d="M24 1.485L22.515 0 12 10.515 1.485 0 0 1.485 10.515 12 0 22.515 1.485 24 12 13.484 22.515 24 24 22.515 13.484 12z" />
          </svg>
        </button>
      </nav>
    )
  }
}
