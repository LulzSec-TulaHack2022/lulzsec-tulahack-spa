import React, { useEffect } from 'react'

import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { getMyPlants } from '../../api'
import PlantCardItem from '../../components/PlantCardItem'
import { useUser } from '../../hooks'
import { setPlantCount } from '../../store/slices/statistics-slice'

export const PlantListPage = () => {
  const { user } = useUser()
  const { data, isLoading } = useQuery('myPlantsList', async () =>
    getMyPlants(user.uid),
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPlantCount(data?.length))
  }, [dispatch, data])

  if (isLoading) {
    return (
      <Stack spacing={1}>
        {[1, 2, 3].map(n => (
          <Stack key={n} direction="row" spacing={1} p={1}>
            <Skeleton
              variant="rectangular"
              width={130}
              height={130}
              sx={{ borderRadius: 2 }}
            />
            <Stack spacing={2} px={1} alignItems="stretch" flex={1}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={24}
                sx={{ borderRadius: 1 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={64}
                sx={{ borderRadius: 1 }}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>
    )
  }

  if (!data) {
    return <Typography m={3}>Добавьте растение в каталоге</Typography>
  }

  return (
    <Box position="relative">
      {/*<Button startIcon={<AddIcon />}>Новое растение</Button>*/}
      <Stack spacing={1}>
        {data?.map(plant => (
          <PlantCardItem flower={plant} key={plant.id} />
        ))}
      </Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        my={5}
      >
        Новое растение можно выбрать в каталоге
      </Typography>
    </Box>
  )
}
