import React from 'react'

function Button({name, onClick}) {
  return (
    <button onClick={onClick}  className=' w-32 h-8 rounded-xl bg-blue-500 text-white font-bold '>{name}</button>  )
}

export default Button