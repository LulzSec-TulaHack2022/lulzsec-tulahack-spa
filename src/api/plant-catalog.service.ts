import { FlowerInfo } from '../types'

import { API } from './API'

export const getPlantCatalog = (): Promise<FlowerInfo[]> =>
  API.get('/catalog').then(res => res.data)
