import React from 'react'

import SwipeableViews from 'react-swipeable-views'

import Points from '../Points'

interface PlantCarouselProps {
  index: number
  images: Array<string>
  handleChange: any
}

const PlantCarousel: React.FC<PlantCarouselProps> = ({
  index,
  images,
  handleChange,
}) => {
  return (
    <div>
      <SwipeableViews index={index} onChangeIndex={handleChange}>
        <img src={images[index]} alt={'plant'} />
      </SwipeableViews>
      <Points currentNumber={index + 1} total={images.length} />
    </div>
  )
}

export default PlantCarousel
