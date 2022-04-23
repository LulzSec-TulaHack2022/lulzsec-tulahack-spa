import React from 'react'

import { Typography, Stack, Button, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

import { useIsAuth, useUser } from '../hooks'
import { removeUser } from '../store/slices/user-slice'

const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const isAuth = useIsAuth()
  const { user } = useUser()

  return (
    <Box position="static" sx={{ p: 1, width: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={300} fontFamily="Montserrat">
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
