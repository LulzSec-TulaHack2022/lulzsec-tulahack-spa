import React, { useState } from 'react'

import { Container, Typography, Button } from '@mui/material'

import stubPlants from '../../stub-flowers'

import PlantCarousel from './PlantCarousel'
// import PlantDescriptionPreview from './PlantDescriptionPreview'

const PlantPreview: React.FC = () => {
  const [index, setIndex] = useState(0)
  return (
    <Container>
      <Typography>Выберите растение</Typography>
      <PlantCarousel
        index={index}
        images={stubPlants.map(item => item.img)}
        handleChange={setIndex}
      />
      <Button>Добавить</Button>
    </Container>
  )
}

export default PlantPreview
