import React from 'react'

import { Outlet } from 'react-router-dom'

import { Stack } from '@mui/material'

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Stack
        sx={{ minHeight: '100vh', border: '1px solid black' }}
        justifyContent="center"
        alignItems="center"
      >
        <Outlet/>
      </Stack>
    </React.Fragment>
  )
}

export default AuthLayout