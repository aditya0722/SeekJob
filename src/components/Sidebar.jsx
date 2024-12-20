import React, { useState, forwardRef } from "react";
import { FaBriefcase, FaStar, FaSignOutAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import Popup from "./Popup";
import { CiWarning } from "react-icons/ci";

const Sidebar = forwardRef(({ isVisible, setSidebar }, ref) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <aside
        ref={ref}
        className={`fixed flex flex-col w-64 h-screen shadow-lg bg-gradient-to-tl from-gray-100 to-gray-300 z-30 transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Sidebar Content */}
        <div className="flex items-center w-full mt-24 text-center justify-evenly">
          <h2 className="mx-3 text-2xl font-bold text-gray-800">Menu</h2>
          <IoExitOutline
            className="text-4xl text-blue-800 cursor-pointer md:hidden"
            onClick={setSidebar}
          />
        </div>
        <nav className="flex-1 mt-10">
          <ul className="space-y-4">
            <Link to="/">
              <li className={`flex items-center px-6 py-3 ${isActive("/") ? "bg-blue-400 text-white" : "text-gray-700 hover:bg-blue-400 hover:text-white"} transition rounded-lg cursor-pointer`}>
                <FaBriefcase className="mr-4 text-2xl" />
                All Jobs
              </li>
            </Link>
            <Link to="/startedjobs">
              <li className={`flex items-center px-6 py-3 ${isActive("/startedjobs") ? "bg-blue-400 text-white" : "text-gray-700 hover:bg-blue-400 hover:text-white"} transition rounded-lg cursor-pointer`}>
                <FaStar className="mr-4 text-2xl" />
                Starred Jobs
              </li>
            </Link>
          </ul>
        </nav>
        <div className="p-4">
          <button
            className="flex items-center justify-center w-full px-4 py-3 text-white bg-red-500 rounded-lg shadow hover:bg-red-600"
            onClick={() => setPopupOpen(true)}
          >
            <FaSignOutAlt className="mr-2 text-xl" />
            Logout
          </button>
        </div>
      </aside>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
          <div className="flex flex-col items-center p-7">
            <span className="text-5xl text-yellow-500">
              <CiWarning />
            </span>
            <h1 className="text-xl font-semibold text-gray-800 mt-7">
              Are you sure you want to Logout?
            </h1>
          </div>
          <div className="flex justify-center gap-3 mx-3 mt-3">
            <button className="px-6 py-2 text-white bg-red-500 rounded-lg" onClick={() => alert("Logged out")}>
              Exit
            </button>
            <button className="px-6 py-2 text-gray-800 bg-gray-200 rounded-lg" onClick={() => setPopupOpen(false)}>
              Cancel
            </button>
          </div>
        </Popup>
      )}
    </>
  );
});

export default Sidebar;
