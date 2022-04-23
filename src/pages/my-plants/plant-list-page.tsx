import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { useQuery } from 'react-query'

import { getMyPlants } from '../../api'
import PlantCardItem from '../../components/molecules/PlantCardItem'
import withProtectedRoute from '../../components/withProtectedRoute'
import { useUser } from '../../hooks'

const PlantListPage = () => {
  const { user } = useUser()
  const { data, isLoading } = useQuery('myPlantsList', async () =>
    getMyPlants(user.uuid),
  )

  return (
    <Box>
      <Typography>Мои растения</Typography>
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
