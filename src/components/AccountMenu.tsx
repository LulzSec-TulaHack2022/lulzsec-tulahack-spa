import React from 'react'

import { Button, Menu, MenuItem } from '@mui/material'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const TriggerMenu = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Open Menu
      </Button>
      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={popupState.close}>Выйти</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem>
      </Menu>
    </div>
  )
}

export default TriggerMenu
