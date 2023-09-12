import React, { Component } from 'react'
import {Link, useLocation} from "react-router-dom"
import laptop from "../assets/laptop.png"
import about from "../assets/about.png"
import project from "../assets/project.png"
import envelope from "../assets/envelope.png"
import "../styles/nav.css"

export default class Nav extends Component {
  render() {
    return (
      <div>
        <img src={laptop} />
        <img src={about} />
        <img src={project} />
        <img src={envelope} />
      </div>
    );
  }
}
