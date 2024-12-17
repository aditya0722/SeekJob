import React from "react";
import { BsFacebook,BsInstagram,BsLinkedin, BsTwitter,BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="relative z-40 py-8 text-white bg-slate-900">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Nexbil</h3>
          <p className="mt-2 text-sm">
            Gangtok, Sikkim, India
          </p>
          <p className="text-sm">Email: email@gmail.com</p>
          <p className="text-sm">Phone: +91 6297226844</p>
       </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold underline">Developed By</h3>
          <h4>Aditya Sharma</h4>
          <div className="flex mt-2 space-x-4">
            <a target="_blank" href="https://github.com/aditya0722" className="hover:text-gray-300">
              <BsGithub/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/aditya-sharma167/" className="hover:text-gray-300">
              <BsLinkedin/>
            </a>
            <a target="_blank" href="https://www.instagram.com/addittyaaaaaaa/?igsh=MXVjZjRuajdnYWZmag%3D%3D#" className="hover:text-gray-300">
            <BsInstagram/>
            </a>
            <a target="_blank" href="https://x.com/AdityaS42916257" className="hover:text-gray-300">
              <BsTwitter/>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a target="_blank" href="#" className="hover:text-gray-300">
              <BsFacebook/>
            </a>
            <a target="_blank" href="#" className="hover:text-gray-300">
              <BsLinkedin/>
            </a>
            <a target="_blank" href="#" className="hover:text-gray-300">
            <BsInstagram/>
            </a>
            <a target="_blank" href="#" className="hover:text-gray-300">
              <BsTwitter/>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700">
        © {new Date().getFullYear()} Nexbil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
