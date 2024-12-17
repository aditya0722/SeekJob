import React, { useContext, useState } from "react";
import FavoriteContext from "../context/FavoritesContext";
import { BiBookmark,BiBookmarkAlt } from "react-icons/bi";
import JobCard from "../components/JobCard";


const StaredPage = () => {
  const { favoriteJobs } = useContext(FavoriteContext); 
  const [page,Setpage]=useState(1);
  const togglePage = (pageNumber) => {
    Setpage(pageNumber);
  };
  return (
    <section className="min-h-screen p-3 ">
           <h1 className="mb-5 text-2xl font-bold text-center">Bookmarked Jobs</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {favoriteJobs.length > 0 ? (
        favoriteJobs.slice(page*6-6,6*page).map((job,i)=>{
            
    return(
        <JobCard key={i} job={job}/>
    )
        })
    
      ) : (
        <p className="font-bold">No jobs have been starred yet!</p>
      )}
      </div>
      {favoriteJobs.length>6 &&
      <div className="flex items-center justify-center mt-4">
        {page > 1 && (
         <span className="text-3xl transition cursor-pointer hover:scale-125" onClick={()=>togglePage(page-1)}>
            ⏪
          </span>
        )}
         {[...Array(Math.ceil(favoriteJobs.length / 6))].map((_, i) => (
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
        {page < favoriteJobs.length/6 && (
        <span className="text-3xl transition cursor-pointer hover:scale-125" onClick={()=>togglePage(page+1)}>
            ⏩
          </span>
        )}
      </div>
}
    </section>
  );
};

export default StaredPage;
