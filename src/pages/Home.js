import React, { Component } from 'react'
import Header from '../components/Header'
import GoCurrent from '../components/GoCurrent'
import GoPast from '../components/GoPast'
import GoMissed from '../components/GoMissed'

class Home extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>A Preview of Coming Attractions</h1>
        </header>
        <nav className="navBar">
          <GoCurrent />
          <GoPast />
          <GoMissed />
        </nav>
        <section>
          <h2>Current Drive</h2>

          <h3>Upcoming Points of Interest</h3>

          <p>
            mapped api data, displaying images, name, and button to add to path
          </p>
        </section>
      </main>
    )
  }
}

export default Home
