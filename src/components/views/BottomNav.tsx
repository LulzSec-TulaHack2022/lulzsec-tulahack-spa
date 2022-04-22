import React, { SyntheticEvent, useMemo } from 'react'

import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'

import { NavLink, NavLinkList, NavLinkValueList } from '../../types'

const BottomNav: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const navLinkList: NavLinkList = useMemo(() => {
    return [
      {
        label: 'Главная страница',
        value: NavLinkValueList.PlantSelectionPage,
        icon: <AcUnitOutlinedIcon />,
      },
      {
        label: 'Мои растения',
        value: NavLinkValueList.PlantListPage,
        icon: <AcUnitOutlinedIcon />,
      },
    ]
  }, [])

  return (
    <Container>
      <BottomNavigation
        showLabels={true}
        value={location.pathname}
        onChange={(event: SyntheticEvent, newValue: string) =>
          navigate(newValue)
        }
      >
        {navLinkList.map((navLink: NavLink) => {
          return <BottomNavigationAction {...navLink} key={v4()} />
        })}
      </BottomNavigation>
    </Container>
  )
}

export default BottomNav
