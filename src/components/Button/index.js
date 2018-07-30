import React from 'react'

const Button = (props) => {
  const { name } = props
  console.log("clicked from component")
  return(
    <div>
      <button>{name}</button>
    </div>
  )
}

export default Button
