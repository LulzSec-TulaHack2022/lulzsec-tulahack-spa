import React, { useState } from 'react'

import { Button, Typography, Box, Paper, Link } from '@mui/material'
import SwipableViews from 'react-swipeable-views'

import stubPlants from '../stub-flowers'

const PlantCatalog: React.FC = () => {
  const [index, setIndex] = useState(0)

  return (
    <Box>
      <SwipableViews
        index={index}
        enableMouseEvents={true}
        onChangeIndex={setIndex}
      >
        {stubPlants.map((plant, idx) => (
          <Box key={idx} p={1}>
            <Box sx={{ my: 1.1 }}>
              <img src={plant.img} alt="plant" style={{ width: '100%' }} />
            </Box>
            <Typography sx={{ fontSize: 22, marginBottom: 1, fontWeight: 700 }}>
              {plant.name}
            </Typography>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography
                fontSize={22}
                overflow="hidden"
                textOverflow="ellipsis"
                maxHeight={135}
              >
                djsakjlfkasdk lfjkdskjfjkkasjjfk sakfjklsjdflkdjsfl jdafkdsajf;s
                ldkfkasjflkasjfasd;
              </Typography>
              <Link underline="always">Подробнее</Link>
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
        <Button>
          <Typography sx={{ fontSize: 17, marginBottom: 1, fontWeight: 700 }}>
            Добавить растение
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default PlantCatalog
