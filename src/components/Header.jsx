import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'
import '../index.css'



const Header = () => {
    const {theme, toggleTheme} = useContext(themeContext)
  return (
    <div className={`header ${theme}`}>
        <h1>Star Wars</h1>
        <span onClick={toggleTheme}>{theme === 'light' ? '🌚' : '🌝'}</span>
    </div>
  )
}

export default Header