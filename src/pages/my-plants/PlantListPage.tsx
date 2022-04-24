import React, { useEffect } from 'react'

import MyLocationIcon from '@mui/icons-material/MyLocation'
import { Box, Skeleton, Stack, Typography, Chip, Alert } from '@mui/material'
import { useQuery, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'

import { getMyPlants, getWeather } from '../../api'
import PlantCardItem from '../../components/PlantCardItem'
import { usePosition, useUser } from '../../hooks'
import { setPlantCount } from '../../store/slices/statistics-slice'

const NumCard = ({ label, value, unit = '' }: any) => (
  <Stack
    borderRadius={3}
    bgcolor="grey.200"
    alignItems="center"
    p={2}
    spacing={1}
  >
    <Typography variant="h5">{value ? value + unit : '—'}</Typography>
    <Typography variant="caption">{label || 'Нет информации'}</Typography>
  </Stack>
)

export const PlantListPage = () => {
  const queryClient = useQueryClient()

  const { user } = useUser()
  const { data, isLoading } = useQuery('myPlantsList', async () =>
    getMyPlants(user.uid),
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPlantCount(data?.length))
  }, [dispatch, data])

  const { latitude, longitude } = usePosition()

  const { data: weather, isLoading: isLoadingWeather } = useQuery(
    ['weather', latitude, longitude],
    async () => getWeather({ latitude, longitude } as any),
    {
      // The query will not execute until the userId exists
      enabled: Boolean(latitude && longitude),
    },
  )

  const handlePlantDelete = id => {
    queryClient.setQueryData(
      'myPlantsList',
      data?.filter(item => item.id !== id),
    )
  }

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
      {weather && !isLoadingWeather ? (
        <>
          <Stack
            spacing={2}
            px={2}
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <Chip
              icon={<MyLocationIcon />}
              label={
                isLoadingWeather ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography>{weather.city}</Typography>
                )
              }
            />
            <Stack spacing={1} direction="row" justifyContent="center">
              <NumCard
                label="Температура"
                value={Math.floor(weather.temperature)}
                unit="℃"
              />
              <NumCard label="Влажность" value={weather.humidity} unit="%" />
              <NumCard label="Освещённость" value={undefined} />
            </Stack>
          </Stack>
        </>
      ) : (
        <Alert severity="info">Разрешите геолокацию!</Alert>
      )}
      {data ? (
        <>
          <Stack spacing={1}>
            {data?.map(plant => (
              <PlantCardItem
                flower={plant}
                key={plant.id}
                onDelete={() => handlePlantDelete(plant.id)}
              />
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
        </>
      ) : (
        <Typography m={3}>Добавьте растение в каталоге</Typography>
      )}
    </Box>
  )
}
