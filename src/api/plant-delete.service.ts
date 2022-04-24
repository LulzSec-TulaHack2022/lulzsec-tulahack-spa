import { MyFlower } from '../types'

import { API } from './API'

export const deletePlant = (flowerId: string): Promise<MyFlower[]> =>
  API.delete('/flowers', {
    data: {
      flower_id: flowerId,
    },
  }).then(res => res.data)
