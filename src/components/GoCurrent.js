import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoCurrent extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/current">Current Drives</Link>
      </div>
    )
  }
}

export default GoCurrent
