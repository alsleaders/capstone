import React from 'react'
import GoHome from '../components/GoHome'
import GoCurrent from '../components/GoCurrent'
import GoPast from '../components/GoPast'

export default function ThingsYouMissed() {
  return (
    <>
      <main>
        <header>
          <h1>Things You Missed </h1>
        </header>
        <nav className="navBar">
          <GoHome />
          <GoCurrent />
          <GoPast />
        </nav>
        <p>This is the Things you Missed Page</p>
      </main>
    </>
  )
}
