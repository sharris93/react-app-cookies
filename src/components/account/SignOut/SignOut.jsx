import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useUser } from '../../../contexts/UserContext.jsx'

const SignOut = () => {
  const { logout } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    navigate('/')
  }, [])

  return <>Signing out...</>
}

export default SignOut
