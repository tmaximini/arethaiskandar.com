import React, { Component } from "react"
import imagesloaded from "imagesloaded"

export default class Tilt extends Component {
  componentDidMount() {
    imagesloaded(
      document.querySelector(".background"),
      { background: true },
      () => document.body.classList.remove("loading")
    )
  }

  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(/1.jpg)`,
        }}
      ></div>
    )
  }
}
