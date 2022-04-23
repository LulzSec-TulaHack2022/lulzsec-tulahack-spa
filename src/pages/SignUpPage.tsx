import React from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'

import AuthForm from '../components/AuthForm'
import { useAuth } from '../hooks'

export const SignUpPage = () => {
  const signUp = useAuth(createUserWithEmailAndPassword)

  return (
    <AuthForm
      onSubmit={signUp}
      title={'Регистрация'}
      buttonText={'Зарегистрироваться'}
      navLinkText={'Уже есть аккаунт? Войти'}
      link={'/auth/sign-in'}
    />
  )
}

export default SignUpPage
