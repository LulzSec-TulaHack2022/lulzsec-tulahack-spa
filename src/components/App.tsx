import React from 'react'

import { Box, Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import FirebaseAuth from './FirebaseAuth'
import PageNotFound from './PageNotFound'

const App: React.FC = () => {
  return (
    <Container component="main" maxWidth="xl">
      <Box>
        <Routes>
          <Route path="/" element={<FirebaseAuth />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </Container>
  )
}

export default App
