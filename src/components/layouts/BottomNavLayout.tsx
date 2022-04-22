import React from 'react'

import { Outlet } from 'react-router-dom'

import { BottomNav } from '../views'

const BottomNavLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
      <BottomNav />
    </React.Fragment>
  )
}

export default BottomNavLayout
