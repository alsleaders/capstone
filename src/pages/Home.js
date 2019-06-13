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
          <Header />
        </header>
        <nav>
          <GoCurrent />
          <GoPast />
          <GoMissed />
        </nav>
        <h2>Current Drive</h2>

        <h3>Upcoming Points of Interest</h3>

        <p> mapped images, name, and button to add to path</p>
        <p>tired me might be dumb </p>
      </main>
    )
  }
}

export default Home
