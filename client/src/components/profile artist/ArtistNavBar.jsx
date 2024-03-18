import { Camera } from 'lucide-react'
import React from 'react'

function NavBar() {
  return (
    <nav className=" bg-gray-400 shadow-xl  h-[200px] rounded-bl-[30px]  rounded-br-[30px] relative flex justify-center items-center">
        <input
          type="file"
          id="backgroundImageInput"
          className="hidden"
          accept="image/*"
        />
        <label
          htmlFor="backgroundImageInput"
          className="py-2 px-4 cursor-pointer absolute top-0 right-0 text-[22px]"
        >
    <Camera className=" absolute inset-y-1 right-2 w-8 h-8 " />        </label>
      </nav>
  )
}

export default NavBar