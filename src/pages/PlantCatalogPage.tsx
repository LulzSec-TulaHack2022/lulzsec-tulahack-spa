import React from 'react'

import { Container, Typography } from '@mui/material'

import PlantCatalog from '../components/PlantCatalog'

export const PlantCatalogPage: React.FC = () => {
  return (
    <Container>
      <Typography>Выбор растения</Typography>
      <PlantCatalog />
    </Container>
  )
}
