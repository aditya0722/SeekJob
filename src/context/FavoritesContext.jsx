import { createContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteJobs = ({ children }) => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const addFavoriteJobs = (job) => {
    setFavoriteJobs((prevFavorites) => [...prevFavorites, job]);
  };

  const removeFavoriteJob = (job) => {
    setFavoriteJobs((prevFavorites) =>
      prevFavorites.filter((favJob) => favJob.id !== job.id)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favoriteJobs, addFavoriteJobs, removeFavoriteJob }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default  FavoriteContext ;
