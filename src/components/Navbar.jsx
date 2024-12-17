import React from "react";
import { CgSearch } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import logo from '../assets/logo.png';
import { RiMenuLine } from "react-icons/ri";

function Navbar({setSidebar}){
    
    return(
        <nav className="fixed z-40 flex items-center justify-between w-screen py-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            
            <div className="flex items-center mx-20 text-2xl logo-text max-md:mx-2">
               
                <RiMenuLine className='mx-2 cursor-pointer md:hidden' onClick={setSidebar}/>
        
                
            
                
                <img src={logo} alt="logo" height={50} width={50} className="w-10 h-10 max-md:"/><h2>SeekJob</h2>
                
            </div>
            <div className="flex items-center w-auto px-1 mx-2 text-xl rounded-2xl bg-slate-100 max-md:hidden">
                    <input type="text" className="px-2 py-1 rounded-2xl w-3/3 bg-slate-100 focus:outline-none"  placeholder="Search Jobs,Companies"/>
                    <CgSearch className="text-xl "/>
            </div>
            <div className="flex items-center mx-20 text-2xl justify-evenly max-md:mx-4">
                <MdOutlineMail/>
                <IoMdNotificationsOutline className="mx-3"/>
            <CgProfile className="text-5xl "/>
            </div>
        </nav>
    )
}
export default Navbar;