import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoCurrent extends Component {
  render() {
    return (
      <>
        <Link to="/current">Current Drives</Link>
      </>
    )
  }
}

export default GoCurrent
