import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import JobPage from "./Pages/jobPage";
import StaredPage from "./Pages/staredJobsPage";
import { Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import DetailsForm from "./Pages/DetailsForm";

import "./App.css";

function App() {
  
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 650);

  

  // toggling the sidebar manually
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  // Updating the sidebar on window resize
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

  return (
    <>
      <Navbar setSidebar={toggleSidebar} />
       <Sidebar isVisible={isSidebarVisible} setSidebar={toggleSidebar}/>


       
        <Layout>
     
          <Routes>
          
            <Route path='/' element={<JobPage/>}/>
            <Route path='/startedjobs' element={<StaredPage/>}/>
            <Route path='/detailsForm' element={<DetailsForm/>}/>
          </Routes>
          
          </Layout>
          <Footer/>
          
        
      

    </>
  );
}

export default App;
