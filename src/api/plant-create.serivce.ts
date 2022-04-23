import { MyFlower } from '../types'

import { API } from './API'

export const createPlant = ({
  ownerId,
  nameNomenclature,
  name,
}: {
  ownerId: string
  nameNomenclature: string
  name: string
}): Promise<MyFlower[]> =>
  API.post('/flowers', {
    owner_id: ownerId,
    name_nomenclature: nameNomenclature,
    name: name,
  }).then(res => res.data)
