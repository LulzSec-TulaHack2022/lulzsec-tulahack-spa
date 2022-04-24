import React, { FunctionComponent, useState } from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { getImgByName } from '../api/imgPlantsMap'
import { increaseWateringCount } from '../store/slices/statistics-slice'
import { MyFlower } from '../types'

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
        <Stack spacing={0.5} flex={1}>
          <Typography fontWeight="bold" color="primary">
            {name ?? 'Без' + ' имени'}
          </Typography>
          <Typography color="text.secondary">{nameNomenclature}</Typography>
          <Box height="4rem">
            {watered ? (
              <Typography color="success.main">Потрясающе!</Typography>
            ) : needWater ? (
              <Typography color="error.main">Полейте растение!</Typography>
            ) : null}
            {!watered && (
              <Button
                variant="veronika"
                color="secondary"
                size="small"
                fullWidth
                onClick={markWateringPlant}
                sx={{ mt: 1 }}
              >
                Я полил(а) растение
              </Button>
            )}
          </Box>
        </Stack>
      </Stack>
      <PlantActions id={id} onDelete={onDelete} />
    </Box>
  )
}

export default PlantCardItem
