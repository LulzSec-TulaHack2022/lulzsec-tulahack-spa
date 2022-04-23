import React from 'react'

import {
  Box,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { useQuery } from 'react-query'

import { getMyPlants } from '../../api'
import PlantCardItem from '../../components/PlantCardItem'
import withProtectedRoute from '../../components/withProtectedRoute'
import { useUser } from '../../hooks'

export const PlantListPage = () => {
  const { user } = useUser()
  const { data, isLoading } = useQuery('myPlantsList', async () =>
    getMyPlants(user.uuid),
  )

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
    <Stack spacing={1}>
      {data?.map(plant => (
        <PlantCardItem flower={plant} key={plant.id} />
      ))}
    </Stack>
  )
}

export default withProtectedRoute(PlantListPage)
