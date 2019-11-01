import React, { Component } from "react"
import imagesloaded from "imagesloaded"

const getMousePos = e => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }
  return { x: posx, y: posy }
}

// Main image  tilt effect.
class TiltFx {
  constructor(bgImage) {
    this.DOM = { main: document.querySelector(".content .background") }
    // Number of layers (how many repeated image elements)
    this.layersTotal = 4
    this.bgImage = bgImage
    this.layout()
    this.initEvents()
  }
  layout() {
    let inner = ""
    for (let i = 0; i <= this.layersTotal - 1; ++i) {
      inner +=
        '<div class="background__copy" style="background-image: url(/' +
        this.bgImage +
        ')"></div>'
    }
    this.DOM.main.innerHTML = inner
    this.DOM.layers = Array.from(
      this.DOM.main.querySelectorAll(".background__copy")
    )
  }
  initEvents() {
    this.mousemoveFn = ev => requestAnimationFrame(() => this.tilt(ev))
    document.body.addEventListener("mousemove", this.mousemoveFn)
  }
  // Tilt the image wrap and texts when mouse moving the current slide.
  tilt(ev) {
    if (!global.allowTilt) return
    const mousepos = getMousePos(ev)
    const bounds = this.DOM.main.getBoundingClientRect()
    // Mouse position relative to the main element (this.DOM.main).
    const relmousepos = {
      x: mousepos.x - bounds.left,
      y: mousepos.y - bounds.top,
    }

    this.DOM.layers.forEach((layer, pos) => {
      // Move the element from -val to val pixels in both x and y axis.
      let val = pos + 1
      let t = { x: [val, -val], y: [val, -val] },
        r = { x: [-2, 2], y: [-val, val] },
        s = { v: [1.03, 0.97] }

      const transforms = {
        translation: {
          x: ((t.x[1] - t.x[0]) / bounds.width) * relmousepos.x + t.x[0],
          y: ((t.y[1] - t.y[0]) / bounds.height) * relmousepos.y + t.y[0],
        },
        rotation: {
          x: ((r.x[1] - r.x[0]) / bounds.height) * relmousepos.y + r.x[0],
          y: ((r.y[1] - r.y[0]) / bounds.width) * relmousepos.x + r.y[0],
        },
        scale: {
          v: ((s.v[1] - s.v[0]) / bounds.height) * relmousepos.y + s.v[0],
        },
      }

      global.TweenMax.to(layer, 1.5, {
        ease: "Power1.easeOut",
        x: transforms.translation.x,
        y: transforms.translation.y,
        rotationX: transforms.rotation.x,
        rotationY: transforms.rotation.y,
        scale: transforms.scale.v,
      })
    })
  }
  // Scale up all the layers.
  zoom() {
    global.TweenMax.staggerTo(
      this.DOM.layers,
      1.5,
      {
        ease: "Expo.easeOut",
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1.1,
      },
      0.04
    )
  }
  reset() {
    global.TweenMax.staggerTo(
      this.DOM.layers,
      1.5,
      {
        ease: "Expo.easeOut",
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
      },
      0.07
    )
  }
}

export default class Tilt extends Component {
  componentDidMount() {
    imagesloaded(
      document.querySelector(".background"),
      { background: true },
      () => document.body.classList.remove("loading")
    )
    new TiltFx(this.props.bgImage)
    document.body.style.overflow = "hidden"
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto"
  }

  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(/${this.props.bgImage})`,
        }}
      ></div>
    )
  }
}

Tilt.defaultProps = {
  bgImage: "1.jpg",
}
