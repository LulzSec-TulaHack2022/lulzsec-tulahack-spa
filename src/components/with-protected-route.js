import React from 'react'

import ProtectedRoute from "./protected-route";

const withProtectedRoute = (Wrapped) => {
  return (props) => {
    return (
      <ProtectedRoute>
        <Wrapped {...props}/>
      </ProtectedRoute>
    )
  }
}

export default withProtectedRoute