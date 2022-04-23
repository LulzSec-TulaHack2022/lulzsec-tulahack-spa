import React from 'react'

import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <Box height="100%">
      <Box position="fixed" top="0" left="0" width="100%" zIndex={10}>
        <Header />
      </Box>
      <Box flexGrow={1} pt={10}>
        <Outlet />
      </Box>
      <Box position="fixed" bottom="0" left="0" width="100%">
        <BottomNav />
      </Box>
    </Box>
  )
}

export default MainLayout
