import React from 'react'

const Button = ({handleClick ,value, title }) => {
  return (
    <button onClick={handleClick} value={value} className={`px-2 py-1 border text-base hover:bg-blue hover:text-white`}>{title}</button>
  )
}

export default Button
