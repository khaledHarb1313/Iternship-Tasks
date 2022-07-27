import React from 'react'
import classes from './Cell.module.css'

const Cell = ({ value, handleClick }) => {
  return (
    <>
      <div
        className={value === 0 ? classes['Emp_box'] : classes['botton-cell']}
        onClick={() => handleClick(value)}
      >
        {value}
      </div>
    </>
  )
}

export default Cell
