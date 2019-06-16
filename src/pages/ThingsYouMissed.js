import React from 'react'
import GoHome from '../components/GoHome'
import GoCurrent from '../components/GoCurrent'
import GoPast from '../components/GoPast'

export default function ThingsYouMissed() {
  return (
    <>
      <nav>
        <GoHome />
        <GoCurrent />
        <GoPast />
      </nav>
      <p>This is the Things you Missed Page</p>
    </>
  )
}
