import React from 'react'

import ForestRoundedIcon from '@mui/icons-material/ForestRounded'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import PersonIcon from '@mui/icons-material/Person'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const BottomNav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <BottomNavigation
      showLabels={true}
      value={location.pathname}
      onChange={(event, newValue) => navigate(newValue)}
      sx={{ background: 'none' }}
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
        label="Профиль"
        value="/profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNav
