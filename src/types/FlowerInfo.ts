type PropertyRange = 'low' | 'medium' | 'high' | 'any'

type FlowerInfo = {
  id: number
  name: string
  description: string
  temperature: PropertyRange
  humidity: PropertyRange
  illumination: number
}

export type { FlowerInfo }
