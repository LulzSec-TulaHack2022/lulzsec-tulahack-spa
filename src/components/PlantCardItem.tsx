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
    flower: { name, nameNomenclature, needWater },
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
            width: 120,
            height: 120,
            borderRadius: 1,
          }}
        >
          🌻
        </Box>
        <Stack spacing={0.25}>
          <Typography variant="h5">{name}</Typography>
          <Typography color="text.secondary">{nameNomenclature}</Typography>
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
      <IconButton sx={{ position: 'absolute', top: 4, right: 4 }}>
        <MoreHorizIcon />
      </IconButton>
    </Box>
  )
}

export default PlantCardItem
