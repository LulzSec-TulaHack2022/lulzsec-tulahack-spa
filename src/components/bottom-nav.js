import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person'

const BottomNav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
      <BottomNavigation
        showLabels={true}
        value={location.pathname}
        onChange={(event, newValue) =>
          navigate(newValue)
        }
      >
        <BottomNavigationAction
          label={'Каталог'}
          value={'/'}
          icon={<FormatListBulletedIcon/>}
        />
        <BottomNavigationAction
          label={'Мои растения'}
          value={'/plant-list'}
          icon={<FavoriteIcon/>}
        />
        <BottomNavigationAction
          label={'Аккаунт'}
          value={'/user'}
          icon={<PersonIcon/>}
        />
      </BottomNavigation>
    </Container>
  )
}

export default BottomNav
