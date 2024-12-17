import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaFileUpload,
} from "react-icons/fa";
import Popup from "../components/Popup";
import { CiWarning } from "react-icons/ci";
import { use } from "react";
const DetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    resume: null,
    coverLetter: "",
  });

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupData,setPopupData] =useState("")
  // Handling th popup
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const { fullName, email, location, resume, coverLetter } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName.trim()) {
        setPopupData("Full name is required.");
      return false;
    }

    if (!emailRegex.test(email)) {
        setPopupData("Please enter a valid email address.");
      return false;
    }

    if (!location.trim()) {
        setPopupData("Location is required.");
      return false;
    }

    if (!resume) {
        setPopupData("Please upload your resume.");
      return false;
    }

    if (!coverLetter.trim()) {
        setPopupData("Cover letter is required.");
      return false;
    }
    

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
    }
    else{
        openPopup(true)
    }
  };

  return (
    <div className="mt-4">
      <div className="max-w-4xl p-10 mx-auto bg-white rounded-lg shadow-xl ">
        <h2 className="text-4xl font-bold text-center text-indigo-600 ">
          Submit Your Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-8 mt-11 md:grid-cols-2"
        >
          <div className="flex items-center justify-center mt-4 space-x-4">
            <FaUser className="text-2xl text-indigo-500" />
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Aditya Sharma"
                required
              />
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <FaEnvelope className="text-2xl text-indigo-500" />
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="sharmaaaditya167@gmail.com"
                required
              />
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <FaMapMarkerAlt className="text-2xl text-indigo-500" />
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-800">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Gangtok, Sikkim, India"
                required
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaFileUpload className="text-2xl text-indigo-500" />
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-800">
                Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 md:col-span-2">
            <FaFileAlt className="text-2xl text-indigo-500" />
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-800">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your cover letter"
                rows="5"
                required
              ></textarea>
            </div>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full px-6 py-3 mt-10 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={validateForm}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Pop up for validation */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="flex flex-col items-center p-7 w-96">
          <span className="text-5xl text-yellow-500">
            <CiWarning />
          </span>
          <h1 className="text-xl font-semibold text-gray-800 mt-7">
            {popupData}
          </h1>
        </div>

        <div className="flex justify-center gap-3 mx-3 mt-3 p-7">
         
          <button
            className="px-6 py-2 text-gray-800 transition duration-300 bg-blue-400 rounded-lg hover:bg-blue-300"
            onClick={() => {
              closePopup();
            }}
          >
            Ok
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default DetailsForm;
