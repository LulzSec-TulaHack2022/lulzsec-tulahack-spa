import { MyFlower } from '../types'

import { API } from './API'

type Coordinates = { latitude: number; longitude: number }

export const getWeather = ({
  latitude,
  longitude,
}: Coordinates): Promise<any[]> =>
  API.get('/currentweather', {
    params: {
      latitude,
      longitude,
    },
    data: {
      latitude,
      longitude,
    },
  }).then(res => res.data)
