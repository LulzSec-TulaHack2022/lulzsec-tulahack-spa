import React from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'

import AuthForm from '../components/AuthForm'
import { useAuth } from '../hooks'

export const SignInPage = () => {
  const signIn = useAuth(signInWithEmailAndPassword)

  return (
    <AuthForm
      onSubmit={signIn}
      title="Вход"
      buttonText="Войти"
      navLinkText="Ещё нет аккаунта? Зарегистрироваться"
      link="/auth/sign-up"
    />
  )
}
