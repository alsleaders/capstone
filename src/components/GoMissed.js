import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ThingsMissed extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/save">Things You Missed</Link>
      </div>
    )
  }
}

export default ThingsMissed
