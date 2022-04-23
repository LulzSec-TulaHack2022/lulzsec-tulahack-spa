import React, { FunctionComponent } from 'react'

import { Avatar, Stack, Typography } from '@mui/material'

import { useUser } from '../hooks'

export const AccountPage: FunctionComponent = () => {
  const { user } = useUser()
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://api.minimalavatars.com/avatar/random/png"
      />
      <Typography fontWeight="bold">{user.email}</Typography>
    </Stack>
  )
}

export default AccountPage
