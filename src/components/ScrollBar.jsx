import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext';
import { Footer } from 'antd/es/layout/layout';


const ScrollBar = () => {
    const { theme } = useContext(themeContext);
  return (
<Footer
    style={{
      textAlign: "center", background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff'
    }}
  >
    Star War ©2023 Created by Elzar
  </Footer>
  )
}

export default ScrollBar