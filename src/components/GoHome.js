import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoHome extends Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
      </>
    )
  }
}

export default GoHome
