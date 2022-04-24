import React, { FunctionComponent } from 'react'

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GrassIcon from '@mui/icons-material/Grass'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Statistics from '../components/Statistics'
import { useUser } from '../hooks'
import { removeUser } from '../store/slices/user-slice'

export const AccountPage: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { user } = useUser()

  return (
    <Box py={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://api.minimalavatars.com/avatar/random/png"
        />
        <Typography variant="h6" fontWeight="bold" flex={1}>
          {user.email}
        </Typography>
        <Button
          component={NavLink}
          to="/"
          onClick={() => dispatch(removeUser())}
        >
          Выйти
        </Button>
      </Stack>

      <Stack spacing={1.5} mt={10}>
        <Typography variant="h5" fontWeight="bold">
          Меню
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            borderRadius: 10,
            py: 2,
            px: 3,
            background: '#E9FBE7',
            '&:hover': {
              background: '#d9ebd8',
            },
          }}
        >
          <Typography fontWeight="bold" color="text.secondary">
            Ваши растения
          </Typography>
          <GrassIcon />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            borderRadius: 10,
            py: 2,
            px: 3,
            background: '#FBE7E7',
            '&:hover': {
              background: '#ebd8d8',
            },
          }}
        >
          <Typography fontWeight="bold" color="text.secondary">
            Награды
          </Typography>
          <EmojiEventsIcon />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            borderRadius: 10,
            py: 2,
            px: 3,
            background: '#ECE7FB',
            '&:hover': {
              background: '#ddd8eb',
            },
          }}
        >
          <Typography fontWeight="bold" color="text.secondary">
            Задать вопрос
          </Typography>
          <QuestionAnswerIcon />
        </Stack>
      </Stack>
      <Statistics />
    </Box>
  )
}

export default AccountPage
