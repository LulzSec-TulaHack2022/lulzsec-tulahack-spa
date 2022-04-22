type Size = 'low' | 'medium' | 'high' | 'any'

type FlowerInfo = {
  id: number
  name: Size
  temperature: Size
  description: Size
  humidity: Size
  illumination: Size
}

export type { FlowerInfo }
