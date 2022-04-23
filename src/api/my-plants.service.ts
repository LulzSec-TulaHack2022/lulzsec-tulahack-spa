import { MyFlower } from '../types'

//import { API } from './API'

export const getMyPlants = (ownerId: string): Promise<MyFlower[]> =>
  new Promise<MyFlower[]>(res =>
    res([
      {
        alive: true,
        id: 5,
        name: 'Анатолий',
        nameNomenclature: 'Петуния',
        needWater: true,
      },
    ]),
  )
//API.get('/getalluserflowers', {
//  params: {
//    owner_id: ownerId,
//  },
//}).then(res => res.data)
