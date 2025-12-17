import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { lightTheme, darkTheme } from './theme.js'

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  const toggleTheme = (name) => {
    if (themes[name]) setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <MUIThemeProvider theme={themes[themeName]}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
