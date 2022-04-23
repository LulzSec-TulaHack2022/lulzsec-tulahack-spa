import React from 'react'
import { Navigate } from 'react-router-dom'

import { useIsAuth } from '../hooks'

const ProtectedRoute = ({ children }) => {
  if (!useIsAuth()) {
    return <Navigate to={'/'} replace />
  }

  return children
}

export default ProtectedRoute