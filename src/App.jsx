import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import JobPage from "./Pages/jobPage";
import StaredPage from "./Pages/staredJobsPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import DetailsForm from "./Pages/DetailsForm";

import "./App.css";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 650);
  const sidebarRef = useRef(null);

  // Toggle the sidebar manually
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  // Update sidebar visibility on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target) && window.innerWidth <= 650) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <>
      <Navbar setSidebar={toggleSidebar} />
      <div className={`overlay ${isSidebarVisible && window.innerWidth <= 650 ? "active" : ""}`} onClick={toggleSidebar}></div>
      <Sidebar ref={sidebarRef} isVisible={isSidebarVisible} setSidebar={toggleSidebar} />

      <Layout>
        <Routes>
          <Route path="/" element={<JobPage />} />
          <Route path="/startedjobs" element={<StaredPage />} />
          <Route path="/detailsForm" element={<DetailsForm />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
