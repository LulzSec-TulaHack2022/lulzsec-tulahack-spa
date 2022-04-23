import React, { FunctionComponent, useState } from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import { getImgByName } from '../api/imgPlantsMap'
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
      <Stack direction="row" alignItems="stretch" spacing={2} mt="40px">
        <Box
          sx={{
            width: 130,
            height: 130,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mt="-40px"
        >
          <img
            src={getImgByName(nameNomenclature)}
            alt={`${name} (${nameNomenclature})`}
            style={{
              height: '100%',
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              bgcolor: 'grey.200',
              width: 130,
              height: '70%',
              borderRadius: 2,
              fontSize: 50,
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
            }}
          />
        </Box>
        <Stack spacing={0.5}>
          <Typography fontWeight="bold">{name}</Typography>
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
