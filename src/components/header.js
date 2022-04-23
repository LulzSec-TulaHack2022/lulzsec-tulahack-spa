import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { AppBar, Typography, Container, Stack, Button } from '@mui/material'

import { useIsAuth } from '../hooks'
import { removeUser } from '../store/slices/user-slice'

const Header = () => {

  const dispatch = useDispatch()

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', padding: '10px 0' }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavLink to={'/'}>
            <Typography variant="h2" fontSize={17} fontWeight={700} color={'gray'}>
              LulzPlants
            </Typography>
          </NavLink>
          {
            useIsAuth() ? (
              <NavLink to={'/'}>
                <Button
                  onClick={() => dispatch(removeUser())}
                  variant={'outlined'}
                  color={'error'}
                >
                  Выйти
                </Button>
              </NavLink>
            ) : (
              <NavLink to={'/auth/sign-in'}>
                <Button variant={'outlined'}>
                  Войти
                </Button>
              </NavLink>
            )
          }
        </Stack>
      </Container>
    </AppBar>
  )
}

export default Header
