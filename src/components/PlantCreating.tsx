import React, { useState, useCallback } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import InvertColorsIcon from '@mui/icons-material/InvertColors'
import LightModeIcon from '@mui/icons-material/LightMode'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Slider,
  Typography,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Button,
  IconButton,
  DialogActions,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { createPlant } from '../api'
import { getImgByName } from '../api/imgPlantsMap'
import { useUser } from '../hooks'
import { FlowerInfo } from '../types'

interface PlantCreatingProps {
  open: boolean
  onClose: any
  plantInfo: FlowerInfo | undefined
}

const PlantCreating: React.FC<PlantCreatingProps> = ({
  open,
  onClose,
  plantInfo,
}) => {
  const [myPlantName, setMyPlantName] = useState('')
  const [illumination, setIllumination] = useState<number | Array<number>>(50)
  const [temperature, setTemperature] = useState('')
  const [humidity, setHumidity] = useState('')

  const { user } = useUser()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const createPlantFunc = useCallback(() => {
    plantInfo &&
      createPlant({
        ownerId: user.uid,
        nameNomenclature: plantInfo.name,
        name: myPlantName,
      }).then(data => console.log(data))
    onClose()
  }, [myPlantName, onClose, user, plantInfo?.name])

  if (!plantInfo) return null

  return (
    <Dialog open={open} fullScreen={matches}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pr={1}
      >
        <DialogTitle>Ввод параметров среды</DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent>
        <Box my={1.1} height={150} width={150}>
          <img
            src={getImgByName(plantInfo.name)}
            alt="plant"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Stack flex={1}>
          <Typography variant="overline">{plantInfo.name}</Typography>
          <TextField
            value={myPlantName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setMyPlantName(event.target.value)
            }
            fullWidth={true}
            label="Имя вашего растения"
            variant="filled"
            sx={{ marginBottom: 4 }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="veronika" fullWidth onClick={createPlantFunc}>
          Добавить растение
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PlantCreating
