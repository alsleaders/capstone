import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ThingsMissed extends Component {
  render() {
    return (
      <>
        <Link to="/save">Things You Missed</Link>
      </>
    )
  }
}

export default ThingsMissed
