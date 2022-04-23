import { MyFlower } from '../types'

import { API } from './API'

export const getMyPlants = (ownerId: string): Promise<MyFlower[]> =>
  API.get('/getalluserflowers', {
    params: {
      owner_id: 'sadgkambprwagwpqbmbs',
    },
  }).then(res => res.data)
