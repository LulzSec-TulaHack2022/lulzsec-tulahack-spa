import React from 'react'

import InvertColorsIcon from '@mui/icons-material/InvertColors'
import LightModeIcon from '@mui/icons-material/LightMode'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import { Box, Chip, Stack, Typography, Modal, Button } from '@mui/material'

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
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={400}
        sx={{ transform: 'translate(-50%, -50%)', backgroundColor: 'white' }}
        p={1}
      >
        <Typography variant="h6" mb={1} fontSize={18} fontWeight={700}>
          {plantInfo.name}
        </Typography>
        <Typography mb={2.5}>{plantInfo.description}</Typography>
        <Typography variant="h6" mb={1} fontSize={16} fontWeight={700}>
          Уход
        </Typography>
        <Stack mb={1}>
          <Chip
            icon={<LightModeIcon color="secondary" />}
            label={plantInfo.illumination}
            variant="outlined"
          />
        </Stack>
        <Stack direction="row" spacing={1} mb={2.5}>
          <Chip
            icon={<ThermostatIcon color="action" />}
            label={plantInfo.temperature}
            variant="outlined"
          />
          <Chip
            icon={<InvertColorsIcon color="primary" />}
            label={plantInfo.humidity}
            variant="outlined"
          />
        </Stack>
        <Box textAlign="center">
          <Button>Добавить растение</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default PlantInfoModal
