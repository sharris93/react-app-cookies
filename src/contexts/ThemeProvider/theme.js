import { createTheme } from '@mui/material/styles'

const baseTypography = { fontFamily: "'Inter', sans-serif" }

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF8A00' },
    secondary: { main: '#006CD9' },
    background: { default: '#F4F4F6', paper: '#FFFFFF' },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      disabled: '#9E9E9E',
    },
    success: { main: '#28A745' },
    warning: { main: '#DC3545' },
  },
  typography: baseTypography,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#E7E9EC',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        enterDelay: 1000,
        leaveDelay: 0,
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#FF8A00' },
    secondary: { main: '#0D1A2D' },
    background: { default: '#111827', paper: '#1F2937' },
    text: {
      primary: '#FFFFFF',
      secondary: '#D1D5DB',
      disabled: '#6B7280',
    },
    success: { main: '#28A745' },
    warning: { main: '#DC3545' },
  },
  typography: baseTypography,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#27334A',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        enterDelay: 1000,
        leaveDelay: 0,
      },
    },
  },
})
