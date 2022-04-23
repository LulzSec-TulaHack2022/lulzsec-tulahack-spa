import React from 'react'

import withProtectedRoute from '../components/withProtectedRoute'

const UserPage = () => {
  return <p>UserPage</p>
}

export default withProtectedRoute(UserPage)
