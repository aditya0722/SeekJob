import React, { useState } from "react";
import { FaBriefcase, FaStar, FaSignOutAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { Link,useLocation } from "react-router-dom";
import Popup from "./Popup";
import { CiWarning } from "react-icons/ci";
const Sidebar = ({ isVisible, setSidebar }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  // Handling th popup
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  const location = useLocation();

  // Utility function to determine active state
  const isActive = (path) => location.pathname === path;

  
  return (
    <>
      <aside
        className={`fixed flex flex-col w-64 h-svh shadow-lg bg-gradient-to-tl from-gray-100 to-gray-300 z-30 transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center w-full mt-24 text-center justify-evenly">
          <h2 className="mx-3 text-2xl font-bold text-gray-800">Menu</h2>

          <IoExitOutline
            className="text-4xl text-blue-800 cursor-pointer md:hidden"
            onClick={setSidebar}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex-1 mt-10">
          <nav>
            <ul className="space-y-4">
              <Link to="/" >
                <li className={`flex items-center px-6 py-3 text-gray-700 transition  ease-in-out rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white 
                  ${isActive('/')?" bg-blue-400 text-white":""}`} >
                  <FaBriefcase className="mr-4 text-2xl" />
                  All Jobs
                </li>
              </Link>
              <Link to="/startedjobs">
                <li className={`flex items-center px-6 py-3 text-gray-700 transition ease-in-out rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white
                  ${isActive('/startedjobs')?" bg-blue-400 text-white":""}`}>
                  <FaStar className="mr-4 text-2xl" />
                  Starred Jobs
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Logout Button on SideBar */}
        <div className="p-4">
          <button
            className="relative flex items-center justify-center w-full px-4 py-3 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow hover:bg-red-600 hover:shadow-lg"
            onClick={() => {
              openPopup();
            }}
          >
            <FaSignOutAlt className="mr-2 text-xl" />
            Logout
          </button>
        </div>
      </aside>
            {/* confirm Box using pop up box */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} >
        
          
            <div className="flex flex-col items-center p-7">
              <span className="text-5xl text-yellow-500">
                <CiWarning />
              </span>
              <h1 className="text-xl font-semibold text-gray-800 mt-7">
                Are you sure you want to Logout?
              </h1>
            </div>

            
            <div className="flex justify-center gap-3 mx-3 mt-3 p-7">
              <button
                className="px-6 py-2 text-white transition duration-300 bg-red-500 rounded-lg hover:bg-red-600"
                onClick={() => alert("Logged out")}
              >
                Exit
              </button>
              <button
                className="px-6 py-2 text-gray-800 transition duration-300 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={()=>{closePopup()}}
              >
                Cancel
              </button>
            </div>
         
        
      </Popup>
    </>
  );
};

export default Sidebar;
