import React from 'react'

import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Stack
        sx={{ minHeight: '100vh' }}
        justifyContent="center"
        alignItems="center"
      >
        <Outlet />
      </Stack>
    </React.Fragment>
  )
}

export default AuthLayout
