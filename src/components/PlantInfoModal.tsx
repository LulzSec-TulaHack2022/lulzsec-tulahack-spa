import React from 'react'

import InvertColorsIcon from '@mui/icons-material/InvertColors'
import LightModeIcon from '@mui/icons-material/LightMode'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import {
  Chip,
  Stack,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material'

import { getIllumination, temperature, humidity } from '../string-values'
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
        <Typography mb={2.5}>{plantInfo.description}</Typography>
        <Typography variant="h6" mb={1} fontSize={16} fontWeight={700}>
          Режим ухода
        </Typography>
        <Stack mb={2.5} gap={1} direction="row">
          <Chip
            icon={<LightModeIcon color="secondary" />}
            label={getIllumination(plantInfo.illumination)}
            variant="filled"
          />
        </Stack>
        <Stack direction="row" spacing={1} mb={2.5} flexWrap="wrap">
          <Chip
            icon={<InvertColorsIcon color="primary" />}
            label={humidity[plantInfo.humidity]}
            variant="filled"
          />
          <Chip
            icon={<ThermostatIcon color="action" />}
            label={temperature[plantInfo.temperature]}
            variant="filled"
          />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default PlantInfoModal
