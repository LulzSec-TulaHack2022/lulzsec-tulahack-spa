import React from 'react'

import withProtectedRoute from "../components/with-protected-route";

const PlantCreatingPage = () => {
  return (
    <p>PlantCreatingPage</p>
  )
}

export default withProtectedRoute(PlantCreatingPage)