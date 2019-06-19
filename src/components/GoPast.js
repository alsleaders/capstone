import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoPast extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/past">Past Drives</Link>
      </div>
    )
  }
}

export default GoPast
