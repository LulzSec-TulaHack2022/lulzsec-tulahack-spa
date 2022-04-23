import React from 'react'

import AddIcon from '@mui/icons-material/AddRounded'
import { Box, Button, Fab, Skeleton, Stack, Typography } from '@mui/material'
import { useQuery } from 'react-query'

import { getMyPlants } from '@lulz/api'
import PlantCardItem from '@lulz/components/PlantCardItem'
import withProtectedRoute from '@lulz/components/withProtectedRoute'
import { useUser } from '@lulz/hooks'

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
    <Box position="relative">
      <Button startIcon={<AddIcon />}>Новое растение</Button>
      <Stack spacing={1}>
        {data?.map(plant => (
          <PlantCardItem flower={plant} key={plant.id} />
        ))}
      </Stack>
      <Fab
        color="secondary"
        aria-label="add"
        sx={{
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default withProtectedRoute(PlantListPage)