import React, { FunctionComponent, useState } from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import { MyFlower } from '../types'

import { PlantActions } from './my-plants/PlantActions'

interface OwnProps {
  flower: MyFlower
}

type Props = OwnProps

const PlantCardItem: FunctionComponent<Props> = props => {
  const {
    flower: {
      name,
      name_nomenclature: nameNomenclature,
      need_water: needWater,
    },
  } = props

  const [watered, setWatered] = useState(() => !needWater)

  const markWateringPlant = () => {
    setWatered(true)
  }

  return (
    <Box p={1} position="relative">
      <Stack direction="row" alignItems="stretch" spacing={2}>
        <Box
          sx={{
            bgcolor: 'grey.200',
            width: 130,
            height: 130,
            borderRadius: 1,
            fontSize: 50,
          }}
        >
          🌻
        </Box>
        <Stack spacing={0.5}>
          <Typography fontWeight="bold" fontSize="1.2rem">
            {name}
          </Typography>
          <Typography color="text.secondary">{nameNomenclature}</Typography>
          <Box height="1.5rem">
            {watered ? (
              <Typography color="success.main">Прекрасно!</Typography>
            ) : needWater ? (
              <Typography color="error.main">Полейте растение!</Typography>
            ) : null}
          </Box>
          {!watered && (
            <Button variant="vera" size="small" onClick={markWateringPlant}>
              Я полил(а) растение
            </Button>
          )}
        </Stack>
      </Stack>
      <PlantActions />
    </Box>
  )
}

export default PlantCardItem
