function Button({name, onClick}) {
  return (
    <button onClick={onClick} className=' w-32 h-8 rounded-full bg-retroBlue text-white font-bold '>{name}</button>  )
}

export default Button