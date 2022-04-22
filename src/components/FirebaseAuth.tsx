import React, { useEffect } from 'react'

import { Typography } from '@mui/material'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const FirebaseAuth: React.FC = () => {
  useEffect(() => {
    const auth = getAuth()
    const admin = {
      email: 'admin@gmail.com',
      password: '123456',
    }
    signInWithEmailAndPassword(auth, admin.email, admin.password)
      .then(userCredential => {
        const user = userCredential.user
        console.log(user)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Typography variant="h2" align="center">
      Check console to see FirebaseResponse :)
    </Typography>
  )
}

export default FirebaseAuth
