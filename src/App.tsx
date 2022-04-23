import React from 'react'

import { Box, Container, Typography } from '@mui/material'
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
      sx={{
        position: 'relative',
        p: 0,
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        my: { xs: 0, sm: 2 },
        height: { xs: '100vh', sm: 'calc(100vh - 32px)' },
        maxHeight: { xs: 'none', sm: '900px' },
        borderRadius: { xs: 0, sm: 2 },
      }}
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

      <Box
        position="absolute"
        bottom={-32}
        left={0}
        display={{ xs: 'none', sm: 'block' }}
      >
        <Typography color="white">LulzPlants #TulaHack2022</Typography>
      </Box>
    </Container>
  )
}

export default App
