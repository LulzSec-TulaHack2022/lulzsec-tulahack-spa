import React, { useState } from 'react'

import { Button, Typography, Box, Paper, Link } from '@mui/material'
import SwipableViews from 'react-swipeable-views'

import stubPlants from '../stub-flowers'

import PlantInfoModal from './PlantInfoModal'

const PlantCatalog: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Box>
      <SwipableViews
        index={index}
        enableMouseEvents={true}
        onChangeIndex={setIndex}
      >
        {stubPlants.map((plantInfo, idx) => (
          <Box key={idx} p={1}>
            <Box my={1.1} height={350}>
              <img
                src={plantInfo.img}
                alt="plant"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Typography fontSize={22} mb={1} fontWeight={700}>
              {plantInfo.name}
            </Typography>
            <Paper elevation={2}>
              <Box p={2}>
                <Typography
                  fontSize={22}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxHeight={100}
                >
                  {plantInfo.description}
                </Typography>
                <Link underline="always" onClick={() => setModalOpen(true)}>
                  Подробнее
                </Link>
                <PlantInfoModal
                  open={modalOpen}
                  onClose={() => setModalOpen(false)}
                  plantInfo={stubPlants[index]}
                />
              </Box>
            </Paper>
          </Box>
        ))}
      </SwipableViews>
      <Box textAlign="center">
        <Typography variant="overline" color="text.secondary">
          ← Сдвигай →
        </Typography>
      </Box>
      <Box textAlign="center" mt={2}>
        <Button>Добавить растение</Button>
      </Box>
    </Box>
  )
}

export default PlantCatalog
