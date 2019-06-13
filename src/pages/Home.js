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
      </main>
    )
  }
}

export default Home
