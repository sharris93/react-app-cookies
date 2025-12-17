import { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeProvider/ThemeProvider.jsx'

import api from '../utils/api.js'

const UserContext = createContext(null)
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const { toggleTheme } = useTheme()
  const { i18n } = useTranslation()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    const res = await api.get('/auth/me/')
    setUser(res.data)
  }

  const login = async (username, password) => {
    await api.post('/auth/token/', { username, password })
    await fetchUser()
  }

  const logout = () => {
    setUser(null)
    toggleTheme('light')
    i18n.changeLanguage('en_US')
  }

  const updateUser = async (new_values) => {
    const new_user = { ...user, ...new_values }
    setUser(new_user)
    await api.patch('/auth/me/', { ...new_user })
  }

  useEffect(() => {
    const init = async () => {
      try {
        await api.post('/auth/token/refresh/')
        await fetchUser()
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  useEffect(() => {
    if (user) {
      toggleTheme(user.theme)
      i18n.changeLanguage(user.language)
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, login, logout, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
