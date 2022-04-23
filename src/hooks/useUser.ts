import { useSelector } from 'react-redux'

export const useUser = () => {
  const user: { email: string; uid: string } = useSelector(
    (state: any) => state.user,
  )

  return { user }
}
