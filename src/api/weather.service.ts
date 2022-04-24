import { API } from './API'

type Coordinates = { latitude: number; longitude: number }

export const getWeather = ({
  latitude,
  longitude,
}: Coordinates): Promise<{
  city: string
  humidity: number
  temperature: number
}> =>
  API.get('/currentweather', {
    params: {
      latitude,
      longitude,
    },
  }).then(res => res.data)
