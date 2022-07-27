import React, { useState, useEffect } from 'react'
import classes from './Board.module.css'
import { shuffle, createBoard, hasWon } from '../../utils/helpers'
import { BOARD_SIZE } from '../../utils/constants'
import Cell from '../Cell'

const Board = () => {
  const [mainCells, setMainCells] = useState([])

  useEffect(() => {
    const cells = createBoard(BOARD_SIZE)
    setMainCells(shuffle(cells))
  }, [])

  // handle swap and click move logic
  const swap = (currentValueIndex, zeroIndex) => {
    let temp = [...mainCells]
    temp[zeroIndex] = mainCells[currentValueIndex]
    temp[currentValueIndex] = 0
    setMainCells(() => [...temp])
  }

  const handleMove = (value) => {
    let zeroIndex = mainCells.indexOf(0)
    let currentValueIndex = mainCells.indexOf(value)

    if (
      currentValueIndex + 4 === zeroIndex ||
      currentValueIndex - 4 === zeroIndex
    ) {
      swap(currentValueIndex, zeroIndex)
    } else if (currentValueIndex + 1 === zeroIndex && zeroIndex % 4 !== 0) {
      swap(currentValueIndex, zeroIndex)
      ((prev) => prev + 1)
    } else if (
      currentValueIndex - 1 === zeroIndex &&
      (zeroIndex + 1) % 4 !== 0
    ) {
      swap(currentValueIndex, zeroIndex)
    }
  }

  return (
    <>
      <div className={classes.Container}>
        {mainCells.map((value) => {
          return (
            <div key={value} className={classes['Cell-Style']}>
              <Cell value={value} handleClick={handleMove} />
            </div>
          )
        })}
      </div>
      
     
    </>
  )
}

export default Board