import React from 'react'

import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <Stack justifyContent="space-between" alignItems="stretch" height="100%">
      <Header />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      <BottomNav />
    </Stack>
  )
}

export default MainLayout
