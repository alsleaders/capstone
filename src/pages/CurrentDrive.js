import React from 'react'
import GoHome from '../components/GoHome'
import GoPast from '../components/GoPast'
import GoMissed from '../components/GoMissed'

export default function CurrentDrive() {
  return (
    <>
      <nav>
        <GoHome />
        <GoPast />
        <GoMissed />
      </nav>
      <p> This is the Current Drive Page</p>
    </>
  )
}
