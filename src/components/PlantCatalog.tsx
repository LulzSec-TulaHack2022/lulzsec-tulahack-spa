import React, { useState } from 'react'

import { Button, Typography, Box, Paper, Link, Skeleton } from '@mui/material'
import { useQuery } from 'react-query'
import SwipableViews from 'react-swipeable-views'

import { getPlantCatalog } from '../api'
import { getImgByName } from '../api/imgPlantsMap'
import { useIsAuth } from '../hooks'

import PlantInfoModal from './PlantInfoModal'

const PlantCatalog: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const isAuth = useIsAuth()

  const { data, isLoading } = useQuery('plantCatalog', async () =>
    getPlantCatalog(),
  )

  if (isLoading) {
    return (
      <SwipableViews
        index={index}
        enableMouseEvents={true}
        onChangeIndex={setIndex}
      >
        {[1, 2, 3].map((n, idx) => {
          return (
            <Box key={idx} p={1}>
              <Skeleton
                variant="rectangular"
                height={350}
                sx={{
                  borderRadius: 2,
                  width: '100%',
                  marginTop: 1.1,
                  marginBottom: 1.1,
                }}
              />
              <Skeleton
                variant="rectangular"
                height={30}
                width={50}
                sx={{ borderRadius: 2, marginBottom: 1 }}
              />
              <Skeleton
                variant="rectangular"
                height={100}
                sx={{ borderRadius: 2, width: '100%' }}
              />
            </Box>
          )
        })}
        <Box textAlign="center">
          <Typography variant="overline" color="text.secondary">
            ← Сдвигай →
          </Typography>
        </Box>
      </SwipableViews>
    )
  }

  if (!data) {
    return null
  }

  return (
    <Box>
      <SwipableViews
        index={index}
        enableMouseEvents={true}
        onChangeIndex={setIndex}
      >
        {data.map((plantInfo, idx) => (
          <Box key={idx} p={1}>
            <Box my={1.1} height={350}>
              <img
                src={getImgByName(plantInfo.name)}
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
              </Box>
            </Paper>
          </Box>
        ))}
        <PlantInfoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          plantInfo={data[index]}
        />
      </SwipableViews>
      <Box textAlign="center">
        <Typography variant="overline" color="text.secondary">
          ← Сдвигай →
        </Typography>
      </Box>
      {isAuth && (
        <Box textAlign="center" mt={2}>
          <Button variant="vera">Добавить растение</Button>
        </Box>
      )}
    </Box>
  )
}

export default PlantCatalog
