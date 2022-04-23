import { MyFlower } from '../types'

import { API } from './API'

export const getMyPlants = (ownerId: string): Promise<MyFlower[]> =>
  API.get('/getalluserflowers', {
    params: {
      owner_id: ownerId,
    },
  }).then(res => res.data)
