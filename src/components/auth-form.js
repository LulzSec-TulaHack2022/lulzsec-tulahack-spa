import React from 'react'

import { TextField, Typography, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const AuthForm = ({ onSubmit, title, buttonText, navLinkText, link }) => {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack alignItems={'center'} spacing={4}>
        <Typography variant={'h1'} fontSize={29}>
          {title}
        </Typography>
        <TextField
          label="Введите email"
          variant="filled"
          inputProps={{ ...register('email') }}
          fullWidth={true}
        />
        <TextField
          label="Введите пароль"
          variant="filled"
          inputProps={{ ...register('password') }}
          fullWidth={true}
        />
        <Button type={'submit'} variant={'contained'}>
          {buttonText}
        </Button>
        <NavLink to={link}>{navLinkText}</NavLink>
      </Stack>
    </form>
  )
}

export default AuthForm
