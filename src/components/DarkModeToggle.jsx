import React from 'react'
import { useState } from 'react'

const DarkModeToggle = () => {

  const [darkmode, setDarkMode] = useState('dark')
  // TODO: Implement dark mode toggle logic

  return (
    <button>Toggle Dark Mode {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle
