import React, { FC } from 'react'

import { TextField, Typography, Button, Stack, Link } from '@mui/material'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

export const AuthForm: FC<any> = ({
  onSubmit,
  title,
  buttonText,
  navLinkText,
  link,
}) => {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' })

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Stack
        alignItems="center"
        spacing={4}
        sx={{ padding: '0', width: '100%' }}
      >
        <Typography variant="h1" fontSize={29} fontWeight={700}>
          {title}
        </Typography>
        <TextField
          label="Введите email"
          variant="filled"
          inputProps={{ ...register('email') }}
          fullWidth={true}
          sx={{ flexGrow: 1 }}
        />
        <TextField
          label="Введите пароль"
          variant="filled"
          inputProps={{ ...register('password') }}
          fullWidth={true}
        />
        <Button type="submit" variant="contained">
          {buttonText}
        </Button>
        <NavLink to={link}>
          <Link underline="always">{navLinkText}</Link>
        </NavLink>
      </Stack>
    </form>
  )
}

export default AuthForm
