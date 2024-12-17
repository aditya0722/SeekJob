import { React, useContext,useState } from "react";
import { BiSolidBookmarkAlt, BiBookmarkAlt } from "react-icons/bi";

import FavoriteContext from "../context/FavoritesContext";
import Popup from "../components/Popup";
import { Link } from "react-router";
const JobCard = ({ job }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selecteData, setSelectedData] = useState(null);
  const { favoriteJobs, addFavoriteJobs, removeFavoriteJob } =
    useContext(FavoriteContext);
  //handalling the bookMark
  const addBookmark = (job) => {
    addFavoriteJobs(job);
  };
  const removeBookmark = (job) => {
    removeFavoriteJob(job);
  };

  // Handling th popup
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <div onClick={() => {
            setSelectedData(job);
            openPopup();
          }}
        key={job.id}
        className="p-5 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
        <span className="flex justify-between">
          <h2 className="text-xl font-semibold text-blue-600">{job.title}</h2>
          {favoriteJobs.some((favJob) => favJob.id === job.id) ? (
            <BiSolidBookmarkAlt
              className="text-2xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                removeBookmark(job)}}
            />
          ) : (
            <BiBookmarkAlt
              className="text-2xl text-gray-400 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                addBookmark(job)}}
            />
          )}
        </span>
        <p className="mb-3 text-sm font-medium text-gray-500">
          {job.company.name}
        </p>

        <p className="text-gray-700 line-clamp-3">{job.description}</p>
        <p className="mt-2 text-sm font-medium text-gray-600">
          📍 {job.location}
        </p>
        <button
          className="px-4 py-2 mt-2 font-medium text-white transition duration-200 bg-blue-600 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          onClick={(event) => {
           
            setSelectedData(job);
            openPopup();
            event.stopPropagation();
          }}
        >
          Apply
        </button>
      </div>
      {selecteData && (
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <div className="flex items-center justify-center bg-slate-700 w-fit ">
            <div className="p-8 bg-white rounded-lg job-width max-md:w-auto max-lg:w-auto">
              <div className="">
                {/* Job Title and Type */}
                <div className="flex flex-col space-y-2">
                  <h1 className="text-3xl font-bold text-blue-600">
                    {selecteData.title}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {selecteData.type}
                  </span>
                </div>

                {/* Company Information */}
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {selecteData.company.name}
                  </h2>
                  <p className="text-base text-gray-700">
                    {selecteData.company.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${selecteData.company.contactEmail}`}
                        className="text-blue-500 hover:underline"
                      >
                        {selecteData.company.contactEmail}
                      </a>
                    </p>
                    <p>
                      Phone:
                      <a
                        href={`tel:${selecteData.company.contactPhone}`}
                        className="text-blue-500 hover:underline"
                      >
                        {selecteData.company.contactPhone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location and Salary */}
                <div className="flex items-center justify-between my-3">
                  <span className="text-lg text-gray-600">
                    📍 {selecteData.location}
                  </span>
                  <span className="text-lg font-semibold text-green-600">
                    {selecteData.salary}
                  </span>
                </div>

                {/* Job Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Job Description
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    {selecteData.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
                    onClick={() => {
                      closePopup();
                    }}
                  >
                    Cancel
                  </button>
                  <Link to="/detailsForm">
                  <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Apply
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default JobCard;
