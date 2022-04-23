import { useSelector } from 'react-redux'

export const useUser = () => {
  const user: { email: string; uuid: string } = useSelector(
    (state: any) => state.user,
  )

  return { user }
}
