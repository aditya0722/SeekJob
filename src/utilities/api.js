
//api to call the Fake jobs post
export const fetchJobs = async () => {
    try {
      const response = await fetch("https://fakejobs-api.vercel.app/jobs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json(); 
    } catch (error) {
      console.error("Error fetching job posts:", error);
      throw error; 
    }
  };