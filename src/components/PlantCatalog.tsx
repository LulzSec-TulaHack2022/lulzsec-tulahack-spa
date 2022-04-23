import React, { useState } from 'react'

import { Container, Button, Typography, Box } from '@mui/material'
import SwipableViews from 'react-swipeable-views'

import stubPlants from '../stub-flowers'

const PlantCatalog: React.FC = () => {
  const [index, setIndex] = useState(0)

  return (
    <Container>
      <SwipableViews
        index={index}
        enableMouseEvents={true}
        onChangeIndex={setIndex}
      >
        {stubPlants.map((plant, idx) => (
          <Container key={idx}>
            <img
              src={plant.img}
              alt="plant"
              style={{ width: '200px', height: '200px' }}
            />
            <Typography>{plant.name}</Typography>
            <Box>
              <Typography>{plant.description}</Typography>
              <Button>Подробнее</Button>
            </Box>
          </Container>
        ))}
      </SwipableViews>
      <Button>Добавить растение</Button>
    </Container>
  )
}

export default PlantCatalog
