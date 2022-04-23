import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ForestRoundedIcon from '@mui/icons-material/ForestRounded'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import PersonIcon from '@mui/icons-material/Person'
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const BottomNav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
      <BottomNavigation
        showLabels={true}
        value={location.pathname}
        onChange={(event, newValue) => navigate(newValue)}
      >
        <BottomNavigationAction
          label="Каталог"
          value="/"
          icon={<FormatListBulletedIcon />}
        />
        <BottomNavigationAction
          label="Мои растения"
          value="/plant-list"
          icon={<ForestRoundedIcon />}
        />
        <BottomNavigationAction
          label="Аккаунт"
          value="/user"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Container>
  )
}

export default BottomNav
