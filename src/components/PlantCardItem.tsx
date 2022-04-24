import React, { FunctionComponent, useState } from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { getImgByName } from '../api/imgPlantsMap'
import { increaseWateringCount } from '../store/slices/statistics-slice'
import { MyFlower } from '../types'
import { getUnitString } from '../utils'

import PlantActions from './my-plants/PlantActions'

interface OwnProps {
  flower: MyFlower
  onDelete: (id: string) => void
}

type Props = OwnProps

const PlantCardItem: FunctionComponent<Props> = props => {
  const {
    flower: {
      name,
      name_nomenclature: nameNomenclature,
      need_water: needWater,
      id: id,
      water_per_month: waterPerMonth,
    },
    onDelete,
  } = props

  const [watered, setWatered] = useState(() => !needWater)
  const dispatch = useDispatch()

  const markWateringPlant = () => {
    setWatered(true)
    dispatch(increaseWateringCount())
  }

  return (
    <Box p={1} position="relative">
      <Stack direction="row" alignItems="stretch" spacing={2} mt="30px">
        <Box
          sx={{
            width: 130,
            height: 130,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mt="-30px"
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
              height: '60%',
              borderRadius: 2,
              fontSize: 50,
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
            }}
          />
        </Box>
        <Stack flex={1}>
          <Typography color="text.secondary" variant="caption">
            {nameNomenclature}
          </Typography>
          <Typography fontWeight="bold">{name ?? 'Без имени'}</Typography>

          <Box pt={1}>
            {watered ? (
              <Typography color="text.secondary">Ты лучше всех!</Typography>
            ) : needWater ? (
              <Typography color="error.main">Полейте растение!</Typography>
            ) : null}
            {!watered && (
              <Button
                variant="veronika"
                size="small"
                fullWidth
                onClick={markWateringPlant}
                sx={{ mt: 1 }}
              >
                Я полил(а) растение
              </Button>
            )}
            <Typography color="primary">
              {'Поливать: ' +
                getUnitString(waterPerMonth, [
                  'раз в месяц',
                  'раз в месяц',
                  'раза в месяц',
                ])}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <PlantActions id={id} onDelete={onDelete} />
    </Box>
  )
}

export default PlantCardItem
