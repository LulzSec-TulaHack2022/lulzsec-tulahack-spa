import { API } from './API'

type PlantProfile = {
  name: string
  description: string
  temperature: string
  humidity: string
  illumination: number
}

export const getCatalog = (): Promise<PlantProfile[]> =>
  API.get('/getcatalog').then(res => res.data)
