import type { ImageOptimized } from './image'

export type Pet = {
  id: number
  name: string
  breed: string
  sex: string
  size: string
  image: string
  imageOptimized?: ImageOptimized
  code: string
  location: string
}

export type Pets = Pet[]
