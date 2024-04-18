// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function About() {
//   return (
//     <>
//       <Navbar/>
//       <div className=" min-h-screen">
        
//       </div>
//       <Footer />
//     </>
//   );
// }
// export default About;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img1 from "../images/Screenshot__36_-removebg-preview.png"

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 mt-40">
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">About Us Page</h1>
          <p className="mt-4">Some text about who we are and what we do.</p>
          <p>We are here to help you.</p>
        </div>
        <h2 className="text-2xl text-center mt-8 mb-4">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img1} alt="Jane" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Sathish Kumar</h2>
                <p className="text-gray-600">CEO & Founder</p>
                <p className="text-gray-700 mt-2">Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="mt-2">sathishwhytap@gmail.com</p>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4">Contact</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img1} alt="Mike" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Sriram</h2>
                <p className="text-gray-600"> Director</p>
                <p className="text-gray-700 mt-2">Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="mt-2">peter@gmail.com</p>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4">Contact</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img1} alt="John" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Ashok</h2>
                <p className="text-gray-600">Developer</p>
                <p className="text-gray-700 mt-2">Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="mt-2">ashok@gmail.com</p>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4">Contact</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img1} alt="John" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Ashok</h2>
                <p className="text-gray-600">Developer</p>
                <p className="text-gray-700 mt-2">Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="mt-2">ashok@gmail.com</p>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4">Contact</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img1} alt="John" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Ashok</h2>
                <p className="text-gray-600">Developer</p>
                <p className="text-gray-700 mt-2">Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="mt-2">ashok@gmail.com</p>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4">Contact</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img1} alt="John" className="w-full" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Ashok</h2>
                <p className="text-gray-600">Developer</p>
                <p className="text-gray-700 mt-2">Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="mt-2">ashok@gmail.com</p>
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
