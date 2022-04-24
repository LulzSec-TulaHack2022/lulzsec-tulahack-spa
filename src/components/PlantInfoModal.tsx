import React from 'react'

import InvertColorsIcon from '@mui/icons-material/InvertColors'
import LightModeIcon from '@mui/icons-material/LightMode'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import {
  Box,
  Chip,
  Stack,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material'

import { FlowerInfo } from '../types'

interface PlantInfoModalProps {
  open: boolean
  onClose: any
  plantInfo: FlowerInfo
}

const PlantInfoModal: React.FC<PlantInfoModalProps> = ({
  open,
  onClose,
  plantInfo,
}) => {
  if (!plantInfo) return null

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <DialogTitle>
        <Typography mb={1} fontSize={22} fontWeight={700}>
          {plantInfo.name}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" mb={1} fontSize={16} fontWeight={700}>
          Описание
        </Typography>
        <Typography mb={2.5}>{plantInfo.description}</Typography>
        <Typography variant="h6" mb={1} fontSize={16} fontWeight={700}>
          Уход
        </Typography>
        <Stack mb={2.5} gap={1} direction="row">
          <Chip
            icon={<LightModeIcon color="secondary" />}
            label={plantInfo.illumination}
            //            variant="filled"
          />
          <Chip
            icon={<ThermostatIcon color="action" />}
            label={plantInfo.temperature}
            //            variant="outlined"
          />
          <Chip
            icon={<InvertColorsIcon color="primary" />}
            label={plantInfo.humidity}
            //            variant="outlined"
          />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default PlantInfoModal
