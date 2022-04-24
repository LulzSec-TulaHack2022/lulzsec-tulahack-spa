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
} from '@mui/material'

import { createPlant } from '../api'
import { getImgByName } from '../api/imgPlantsMap'
import { useUser } from '../hooks'
import { FlowerInfo } from '../types'

interface PlantCreatingProps {
  open: boolean
  onClose: any
  plantInfo: FlowerInfo
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

  const createPlantFunc = useCallback(() => {
    createPlant({
      ownerId: user.uid,
      nameNomenclature: plantInfo.name,
      name: myPlantName,
    }).then(data => console.log(data))
    onClose()
  }, [myPlantName, onClose, user, plantInfo])

  return (
    <Dialog open={open} fullScreen={true}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pr={1}
      >
        <DialogTitle>
          <Typography fontWeight={700} fontSize={22}>
            {plantInfo.name}
          </Typography>
        </DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent>
        <Box my={1.1} height={150} width={150} sx={{ margin: '0 auto' }}>
          <img
            src={getImgByName(plantInfo.name)}
            alt="plant"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <TextField
          value={myPlantName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setMyPlantName(event.target.value)
          }
          fullWidth={true}
          label="Дайте имя растению"
          variant="filled"
          sx={{ marginBottom: 4 }}
        />
        <Typography fontSize={18} fontWeight={700} sx={{ marginBottom: 3 }}>
          Введите параметры среды
        </Typography>
        <Stack direction="row" alignItems="center">
          <Typography sx={{ marginRight: '10px' }}>
            Уровень освещения
          </Typography>
          <LightModeIcon />
        </Stack>
        <Slider
          value={illumination}
          onChange={(
            event: Event,
            value: number | Array<number>,
            activeThumb: number,
          ) => setIllumination(value)}
          valueLabelDisplay="auto"
          sx={{ marginBottom: 3 }}
        />
        <FormControl sx={{ marginBottom: 4, width: '100%' }}>
          <Typography>Температура</Typography>
          <RadioGroup
            value={temperature}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>,
              value: string,
            ) => setTemperature(value)}
            row
            name="temperature"
            sx={{ justifyContent: 'space-between' }}
          >
            <FormControlLabel
              value="low"
              control={<Radio icon={<ThermostatIcon />} />}
              label="Низкая"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="medium"
              control={<Radio icon={<ThermostatIcon />} />}
              label="Средняя"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="high"
              control={<Radio icon={<ThermostatIcon />} />}
              label="Высокая"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ marginBottom: 4, width: '100%' }}>
          <Typography>Уровень влажности</Typography>
          <RadioGroup
            value={humidity}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement>,
              value: string,
            ) => setHumidity(value)}
            row
            name="temperature"
            sx={{ justifyContent: 'space-between' }}
          >
            <FormControlLabel
              value="low"
              control={<Radio icon={<InvertColorsIcon />} />}
              label="Низкая"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="medium"
              control={<Radio icon={<InvertColorsIcon />} />}
              label="Средняя"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="high"
              control={<Radio icon={<InvertColorsIcon />} />}
              label="Высокая"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
        <Box textAlign="center">
          <Button variant="vera" onClick={createPlantFunc}>
            Создать растение
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default PlantCreating
