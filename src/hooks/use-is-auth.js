import { useSelector } from 'react-redux'

const useIsAuth = () => {
  const user = useSelector(state => state.user)

  return user.email !== null && user.uid !== null
}

export default useIsAuth;