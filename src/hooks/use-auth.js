import { getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUser } from '../store/slices/user-slice'

const useAuth = method => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return user => {
    const auth = getAuth()
    method(auth, user.email, user.password)
      .then(userCredential => {
        dispatch(
          setUser({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          }),
        )
        navigate('/')
      })
      .catch(error => console.log(error))
  }
}

export default useAuth
