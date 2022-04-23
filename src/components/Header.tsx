import React from 'react'

import { Typography, Container, Stack, Button, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { useIsAuth } from '../hooks'
import { removeUser } from '../store/slices/user-slice'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useIsAuth()

  return (
    <Box position="static" sx={{ py: 1, width: '100%' }}>
      <Container
        maxWidth="xs"
        sx={{
          padding: '15px 0',
          boxShadow: '0px 4px 10px rgba(136, 136, 136, 0.14)',
          backgroundColor: '#ffffff',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight={700}>
            LulzPlants
          </Typography>
          {isAuth ? (
            <Button
              component={NavLink}
              to="/"
              onClick={() => dispatch(removeUser())}
              variant="contained"
              color="secondary"
            >
              Выйти
            </Button>
          ) : (
            <Button
              component={NavLink}
              to="/auth/sign-in"
              variant="contained"
              color="primary"
            >
              Войти
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
