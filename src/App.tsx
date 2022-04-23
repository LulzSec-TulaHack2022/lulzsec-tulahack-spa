import React from 'react'

import { Container } from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import { MainLayout, AuthLayout } from './layouts'
import { AuthModal } from './layouts/AuthModal'
import {
  AccountPage,
  SignInPage,
  SignUpPage,
  Page404,
  PlantCatalogPage,
  PlantListPage,
} from './pages'

const App = () => {
  const location = useLocation()

  const state = location.state as { backgroundLocation?: Location }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: 0, height: '100vh', backgroundColor: 'white' }}
    >
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PlantCatalogPage />} />
          <Route
            path="plant-list"
            element={
              <ProtectedRoute>
                <PlantListPage />
              </ProtectedRoute>
            }
          />
          <Route path="profile" element={<AccountPage />} />
        </Route>
        <Route path="/auth/" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/auth/" element={<AuthModal />}>
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
        </Routes>
      )}
    </Container>
  )
}

export default App
