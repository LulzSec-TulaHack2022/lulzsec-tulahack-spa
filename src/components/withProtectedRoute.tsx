import React, { ComponentType } from 'react'

import ProtectedRoute from './ProtectedRoute'

// eslint-disable-next-line react/display-name
const withProtectedRoute = (Wrapped: ComponentType) => props =>
  (
    <ProtectedRoute>
      <Wrapped {...props} />
    </ProtectedRoute>
  )

export default withProtectedRoute
