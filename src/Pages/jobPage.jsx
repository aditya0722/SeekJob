import React, { useEffect, useState,useContext  } from "react";
import { fetchJobs } from "../utilities/api";



import JobCard from "../components/JobCard";

const JobPage = () => {
  const [jobsPost, setjobsPost] = useState([]);
  const [page, Setpage] = useState(1);

    useEffect(() => {
      const loadData = async () => {
        
        try {
         
          const data = await fetchJobs();
          
  
          console.log(data);
  
          setjobsPost(data);
        } catch (e) {
          console.log(e);
        }
      
      };
      
      loadData();
      
    }, [jobsPost]);
  
  
  const togglePage = (pageNumber) => {
    Setpage(pageNumber);
  };

  return (
    <>
    <section className="p-3 mt-8">
      <h1 className="mb-5 text-2xl font-bold text-center">Job Posts </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobsPost &&
          jobsPost.slice(page * 6 - 6, page * 6).map((job,i) => (
            <JobCard key={i} job={job}/>
          ))}
      </div>
      <div className="flex items-center justify-center w-full mt-10">
        {page > 1 && (
          <span className="text-3xl transition cursor-pointer hover:scale-125" onClick={() => togglePage(page - 1)}>
            ⏪
          </span>
        )}
        {[...Array(Math.ceil(jobsPost.length / 6))].map((_, i) => (
          <span
            key={i}
            className={`px-3 py-1 mx-1 text-gray-700 transition  rounded-md cursor-pointer hover:bg-blue-500 hover:text-white hover:scale-125${
              page === i + 1 ? " bg-blue-500 scale-125" : " bg-slate-200"
            } `}
            onClick={() => togglePage(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        {page < 5 && (
          <span className="text-3xl transition cursor-pointer hover:scale-125" onClick={() => togglePage(page + 1)}>
            ⏩
          </span>
        )}
      </div>
     
    </section>
    
      </>
  );
};
export default JobPage;
