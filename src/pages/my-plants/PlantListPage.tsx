import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
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

  return (
    <Box>
      <Typography variant="h5" ml={3}>
        Мои растения
      </Typography>
      {isLoading && <Typography>Загрузка...</Typography>}
      <Stack spacing={1}>
        {data?.map(plant => (
          <PlantCardItem flower={plant} key={plant.id} />
        ))}
      </Stack>
    </Box>
  )
}

export default withProtectedRoute(PlantListPage)
