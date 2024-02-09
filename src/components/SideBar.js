import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";

function SideBar() {
    const [open,setOpen]=useState(true)
  return (
    // <div>
        <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3
        top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
      </div>
    // </div>
  )
}

export default SideBar