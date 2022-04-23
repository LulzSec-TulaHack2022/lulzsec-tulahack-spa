import React from 'react'

import clsx from 'clsx'

import styles from './Points.module.scss'

type OwnProps = {
  /** Номер выделенного элемента от 1 */
  currentNumber: number
  /** Количество элеметов в массиве */
  total: number
  /** Показвать, если только один элемент */
  showSingle?: boolean
  className?: string
}

const Points: React.FC<OwnProps> = props => {
  const { currentNumber, total, className, showSingle } = props

  return (
    <div className={clsx(styles.points, className)}>
      {!showSingle && total <= 1
        ? null
        : getPagePoints(currentNumber - 1, total)}
    </div>
  )
}

const getPagePoints = (currentIndex: number, total: number) => {
  let points = ''
  for (let i = 0; i < total; i++) {
    points += i === currentIndex ? '●' : '○'
  }

  return points
}

export default Points
