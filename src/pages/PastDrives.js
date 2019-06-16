import React from 'react'
import GoHome from '../components/GoHome'
import GoCurrent from '../components/GoCurrent'
import GoMissed from '../components/GoMissed'

export default function PastDrives() {
  return (
    <>
      <nav>
        <GoHome />
        <GoCurrent />
        <GoMissed />
      </nav>
      <p> This is the Past Drives page</p>
    </>
  )
}
