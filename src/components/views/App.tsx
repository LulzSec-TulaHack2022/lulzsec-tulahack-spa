import React from 'react'

import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { NavLinkValueList } from '../../types'
import { BottomNavLayout } from '../layouts'
import { PlantListPage, Page404 } from '../pages'

const App: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: '100vh' }}>
      <Routes>
        <Route element={<BottomNavLayout />}>
          <Route
            path={NavLinkValueList.PlantSelectionPage}
            element={<PlantListPage />}
          />
          <Route
            path={NavLinkValueList.PlantCreatingPage}
            element={<div>plant creating page</div>}
          />
          <Route
            path={NavLinkValueList.PlantDetailsPage}
            element={<div>plant details details</div>}
          />
          <Route
            path={NavLinkValueList.PlantListPage}
            element={<div>plant list page</div>}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
