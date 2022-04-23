import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Container } from '@mui/material'
import {
  PlantCreatingPage,
  PlantDetailsPage,
  PlantListPage,
  PlantSelectionPage,
  SignInPage,
  SignUpPage,
  UserPage,
  Page404
} from '../pages'
import { MainLayout, AuthLayout } from '../layouts'

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index exact element={<PlantSelectionPage/>}/>
          <Route path={'plant-creating'} element={<PlantCreatingPage/>}/>
          <Route path={'plant-list'} element={<PlantListPage/>}/>
          <Route path={'plant-details'} element={<PlantDetailsPage/>}/>
          <Route path={'user'} element={<UserPage/>}/>
        </Route>
        <Route path={'/auth/'} element={<AuthLayout/>}>
          <Route path={'sign-in'} element={<SignInPage/>}/>
          <Route path={'sign-up'} element={<SignUpPage/>}/>
        </Route>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
    </Container>
  );
}

export default App;
