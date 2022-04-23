import React from 'react'

import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import BottomNav from '../components/bottom-nav'
import Header from '../components/header'

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
