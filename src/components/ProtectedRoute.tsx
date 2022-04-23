import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useIsAuth } from '../hooks'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const isAuth = useIsAuth()

  useEffect(() => {
    if (!isAuth) {
      navigate('/', {
        replace: true,
      })
    }
  })

  return isAuth ? children : null
}

export default ProtectedRoute
