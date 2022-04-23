import React from 'react'

import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { MainLayout, AuthLayout } from './layouts'
import {
  PlantCreatingPage,
  PlantDetailsPage,
  PlantListPage,
  PlantSelectionPage,
  SignInPage,
  SignUpPage,
  UserPage,
  Page404,
} from './pages'

const App = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ p: 0, height: '100vh' }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PlantSelectionPage />} />
          <Route path="plant-creating" element={<PlantCreatingPage />} />
          <Route path="plant-list" element={<PlantListPage />} />
          <Route path="plant-details" element={<PlantDetailsPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="/auth/" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Container>
  )
}

export default App
