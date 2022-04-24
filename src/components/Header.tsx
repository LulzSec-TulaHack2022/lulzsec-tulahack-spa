import React from 'react'

import { Typography, Stack, Button, Box } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import { useIsAuth, useUser } from '../hooks'

const Header = () => {
  const location = useLocation()

  const isAuth = useIsAuth()
  const { user } = useUser()

  return (
    <Box position="static" sx={{ p: 1, width: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={300} fontFamily="Montserrat">
          <img
            src={logo}
            alt="lulz"
            height="24px"
            width="24px"
            style={{ marginRight: '12px', marginBottom: '-4px' }}
          />
          LulzPlants
        </Typography>
        {isAuth ? (
          <Typography>{user.email}</Typography>
        ) : (
          <Button
            component={NavLink}
            to="/auth/sign-in"
            state={{ backgroundLocation: location }}
          >
            Войти
          </Button>
        )}
      </Stack>
    </Box>
  )
}

export default Header
