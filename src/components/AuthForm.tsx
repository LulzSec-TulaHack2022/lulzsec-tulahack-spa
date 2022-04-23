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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4">{title}</Typography>
        <TextField
          label="Введите email"
          variant="filled"
          value="admin@gmail.com"
          inputProps={{ ...register('email') }}
          fullWidth
        />
        <TextField
          label="Введите пароль"
          variant="filled"
          value="123456"
          inputProps={{ ...register('password') }}
          fullWidth
        />
        <Button type="submit" variant="contained" fullWidth>
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
