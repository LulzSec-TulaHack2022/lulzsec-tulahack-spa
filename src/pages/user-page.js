import React from 'react'

import withProtectedRoute from "../components/with-protected-route";

const UserPage = () => {
  return (
    <p>UserPage</p>
  )
}

export default withProtectedRoute(UserPage)