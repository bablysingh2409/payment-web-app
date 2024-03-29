import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { SiRazorpay } from "react-icons/si";

function SideBar() {
    const [open,setOpen]=useState(true);
  const Menu=[
    {title:"Home", icon:<FaHome/>,path:'/'},
    {title:"Account Statements", icon:<IoDocumentTextSharp/>,path:'/account-statements'},
    {title:"Contacts", icon:<IoMdContacts/>,path:'/contacts'},
    {title:"Vendor Payments",icon:<MdPayment/>,path:'/vendor-payments'},
    {title:"Tax Payments",icon:<RiMoneyEuroCircleFill/>,path:'/tax-payments'},
    {title:"Payout Links",icon:<FaLocationArrow/>,path:'/payout-links'},
  ]
  return (
    <>
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3
        top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
        <div className="inline-flex">
          <SiRazorpay className={` bg-white text-4xl rounded cursor-pointer
          block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}` }/>
          <h1 className={`text-white origin-left font-medium
          text-2xl duration-300 ${!open && "scale-0"}`}>RazorpayX</h1>
        </div>
        <ul className="pt-4">
          {
            Menu.map((menu,i)=>(
              <Link to={menu.path} className='duration-300'>
              <li className="text-gray-300 text-sm flex items-center
              gap-x-4 cursor-pointer p-2 
              hover:bg-light-white rounded-md mt-2" key={i}>
                <span className="text-2xl block float-left">
                  {menu.icon}
                </span>
                  <span className={`text-base
                  font-medium flex-1 ${!open && "hidden"} duration-200`}>{menu.title}</span>
              </li>
              </Link>
            )
                  
            )
          }

        </ul>
      </div>
      <Outlet/>
      </>
  )
}

export default SideBar