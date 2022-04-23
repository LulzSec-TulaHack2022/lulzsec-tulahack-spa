import React from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'

import AuthForm from '../components/auth-form'
import { useAuth } from '../hooks'

const SignInPage = () => {
  const signIn = useAuth(signInWithEmailAndPassword)

  return (
    <AuthForm
      onSubmit={signIn}
      title={'Вход'}
      buttonText={'Войти'}
      navLinkText={'Ещё нет аккаунта? Зарегистрироваться ->'}
      link={'/auth/sign-up'}
    />
  )
}

export default SignInPage
