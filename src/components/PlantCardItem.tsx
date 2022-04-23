import React, { FunctionComponent, useState } from 'react'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'

import { MyFlower } from '../types'

interface OwnProps {
  flower: MyFlower
}

type Props = OwnProps

const PlantCardItem: FunctionComponent<Props> = props => {
  const {
    flower: { name, nomenclatureName, needWater },
  } = props

  const [watered, setWatered] = useState(!needWater)

  const markWateringPlant = () => {
    setWatered(true)
  }

  return (
    <Box p={1}>
      <Stack direction="row">
        <Box
          sx={{
            bgcolor: 'grey.200',
            width: 120,
            height: '100%',
            borderRadius: 1,
          }}
        />
        <Stack spacing={0.25}>
          <Typography variant="h5">{name}</Typography>
          <Typography color="text.secondary">{nomenclatureName}</Typography>
          <Box height="1rem">
            {watered ? (
              <Typography color="text.success">Растение полито!</Typography>
            ) : needWater ? (
              <Typography color="text.danger">Полейте растение!</Typography>
            ) : null}
          </Box>
          <Button variant="contained" onClick={markWateringPlant}>
            Я полил(а) растение
          </Button>
        </Stack>
      </Stack>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
    </Box>
  )
}

export default PlantCardItem
