import React from 'react'

import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { MainLayout, AuthLayout } from './layouts'
import { SignInPage, SignUpPage, Page404, PlantCatalogPage } from './pages'

const App = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ p: 0, height: '100vh' }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PlantCatalogPage />} />
          <Route path="plant-list" element={<PlantListPage />} />
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
