import React from 'react'

import { Dialog, DialogContent } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

export const AuthModal = () => {
  const navigate = useNavigate()

  function onDismiss() {
    navigate(-1)
  }

  return (
    <Dialog open maxWidth="sm" onClose={onDismiss}>
      <DialogContent>
        <Outlet />
      </DialogContent>
    </Dialog>
  )
}
