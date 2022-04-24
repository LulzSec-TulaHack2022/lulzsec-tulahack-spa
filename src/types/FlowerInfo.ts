type PropertyRange = 'low' | 'medium' | 'high' | 'any'

export type FlowerInfo = {
  id: number
  name: string
  description: string
  temperature: PropertyRange
  humidity: PropertyRange
  illumination: PropertyRange
}
