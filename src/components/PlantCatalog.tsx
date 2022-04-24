/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

import { Button, Typography, Box, Paper, Link, Skeleton } from '@mui/material'
import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import { mod } from 'react-swipeable-views-core'
import { virtualize } from 'react-swipeable-views-utils'

import { getPlantCatalog } from '../api'
import { getImgByName } from '../api/imgPlantsMap'
import PlantCreating from '../components/PlantCreating'
import { useIsAuth } from '../hooks'

import PlantInfoModal from './PlantInfoModal'

const VirtualizeSwipeableViews = virtualize(SwipeableViews)

const PlantCatalog: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [plantInfoOpen, setPlantInfoOpen] = useState(false)
  const [plantCreatingOpen, setPlantCreatingOpen] = useState(false)

  const isAuth = useIsAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const { data, isLoading } = useQuery('plantCatalog', async () =>
    getPlantCatalog(),
  )

  if (isLoading) {
    return (
      <SwipeableViews
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
      </SwipeableViews>
    )
  }

  if (!data) {
    return null
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <VirtualizeSwipeableViews
        index={index}
        enableMouseEvents={true}
        onChangeIndex={i => {
          console.log(i)
          setIndex(i)
        }}
        slideRenderer={params => {
          const { index, key } = params

          const currentIndex = mod(index, data.length)

          const plantInfo = data[currentIndex] ?? null

          if (!plantInfo) return null

          return (
            <Box key={key} py={1} px={0.5} sx={{ cursor: 'grab' }}>
              <Box my={1} height={350}>
                <img
                  src={getImgByName(plantInfo.name)}
                  alt="plant"
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
              <Typography mb={2} variant="h2">
                {plantInfo.name}
              </Typography>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxHeight={100}
                  mb={1}
                >
                  {plantInfo.description}
                </Typography>
                <Link underline="always" onClick={() => setPlantInfoOpen(true)}>
                  Подробнее
                </Link>
              </Paper>
            </Box>
          )
        }}
      />
      <Box textAlign="center">
        <Typography variant="overline" color="text.secondary">
          ← Сдвигай →
        </Typography>
      </Box>
      <Box flexGrow={1} />
      <Box textAlign="center" my={2} mx={0.5}>
        <Button
          fullWidth
          variant="vera"
          size="medium"
          onClick={() =>
            isAuth
              ? setPlantCreatingOpen(true)
              : navigate('/auth/sign-in', {
                state: { backgroundLocation: location },
              })
          }
        >
            Добавить растение
        </Button>
        <PlantCreating
          open={plantCreatingOpen}
          onClose={() => setPlantCreatingOpen(false)}
          plantInfo={data[index]}
        />
      </Box>
      <PlantInfoModal
        open={plantInfoOpen}
        onClose={() => setPlantInfoOpen(false)}
        plantInfo={data[index]}
      />
    </Box>
  )
}

export default PlantCatalog
