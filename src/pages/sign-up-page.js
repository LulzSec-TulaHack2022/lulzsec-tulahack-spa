import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";

import AuthForm from "../components/auth-form";
import { useAuth } from '../hooks'

const SignUpPage = () => {

  const signUp = useAuth(createUserWithEmailAndPassword)

  return (
    <AuthForm
      onSubmit={signUp}
      title={'Регистрация'}
      buttonText={'Зарегистрироваться'}
      navLinkText={'Уже есть аккаунт? Войти ->'}
      link={'/auth/sign-in'}
    />
  )
}

export default SignUpPage