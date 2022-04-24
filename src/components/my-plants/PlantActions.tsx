import React, { useCallback } from 'react'

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded'
import { Divider, IconButton, Menu, MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

import { deletePlant } from '../../api'

interface PlantActionsProps {
  id: string
}

const PlantActions: React.FC<PlantActionsProps> = ({ id }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  const handlePlantClick = useCallback(() => {
    deletePlant(id).then(response => console.log(response))
    popupState.close()
  }, [popupState, id])

  return (
    <>
      <IconButton
        sx={{ position: 'absolute', top: 32, right: 4 }}
        {...bindTrigger(popupState)}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={popupState.close}>
          <ListItemIcon>
            <InfoRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Информация</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handlePlantClick}>
          <ListItemIcon>
            <DeleteRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
        <MenuItem onClick={popupState.close}>
          <ListItemIcon>
            <SentimentVeryDissatisfiedRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Это растение погибло</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default PlantActions
