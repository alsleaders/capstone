import React from 'react'
import GoHome from '../components/GoHome'
import GoCurrent from '../components/GoCurrent'
import GoMissed from '../components/GoMissed'

export default function PastDrives() {
  return (
    <>
      <main>
        <header>
          <h1>Past Drives You've Taken</h1>
        </header>
        <nav className="navBar">
          <GoHome />
          <GoCurrent />
          <GoMissed />
        </nav>
        <p> This is the Past Drives page</p>
      </main>
    </>
  )
}
