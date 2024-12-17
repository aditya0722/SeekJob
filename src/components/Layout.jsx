import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center h-auto py-1 bg-slate-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0"></div>

      {/* Main Content */}
      <div className="w-full ml-60 max-md:-ml-4">
        {/* Navbar */}
        <div className=""></div>

        {/* Content */}
        <div className="p-4 mt-20">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
