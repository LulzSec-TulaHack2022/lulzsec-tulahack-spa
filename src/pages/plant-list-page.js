import React from 'react'

import withProtectedRoute from '../components/with-protected-route'

const PlantListPage = () => {
  return (
    <p>PlantListPage</p>
  )
}

export default withProtectedRoute(PlantListPage)