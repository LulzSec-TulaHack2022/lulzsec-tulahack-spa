import React from 'react'

import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <Stack
      sx={{ minHeight: '100vh', border: '1px solid black' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Header />
      <Outlet />
      <BottomNav />
    </Stack>
  )
}

export default MainLayout
