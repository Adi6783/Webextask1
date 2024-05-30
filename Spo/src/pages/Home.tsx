import React, { ReactNode } from 'react';
import img1 from "../images/spoimage.webp";
import img2 from "../images/spo2.svg";

type HomeProps = {
  children?: ReactNode;
};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="py-8 bg-gradient-to-b from-blue-900 to-blue-600">
      <div className="container mx-auto px-4 flex justify-between items-start">
        <div className="w-3/5">
          <div className="py-8 text-white">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to SPO Portal</h1>
            <p className="text-lg text-center">Explore opportunities, insights, and resources for your career growth.</p>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">Contact Us</button>
          </div>

          <div className="mt-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">College Ranking</h2>
            <p className="mb-6">IIT-K has been a prestigious institute since the very beginning.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-red-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">NIRF</h3>
                <p>Ranked 4 amongst Engineering and 5 overall</p>
              </div>
              <div className="bg-red-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">QS</h3>
                <p>Ranked 5 in the nation</p>
              </div> 
            </div>
          </div>

          <div className="mt-12 text-violet-500">
            <h2 className="text-3xl font-semibold mb-4">Top Recruiters</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Amazon</h3>
                <p>USA</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Google</h3>
                <p>USA</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Samsung</h3>
                <p>South Korea</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Accenture</h3>
                <p>Japan</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">DRDO</h3>
                <p>India</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Microsoft</h3>
                <p>USA</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Nvidia</h3>
                <p>USA</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Deloitte</h3>
                <p>UK</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white">Twitter</a>
              <a href="#" className="text-blue-300 hover:text-white">Facebook</a>
              <a href="#" className="text-blue-300 hover:text-white">LinkedIn</a>
            </div>
          </div>

          <div className="mt-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Fields in Which the College Excels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Engineering</h3>
                <p>Producing best engineers who contribute world wide</p>
              </div>
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Research</h3>
                <p>State of the art research facility</p>
              </div>
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Business Administration</h3>
                <p>Excellent MBA programs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 mt-12 pt-12">
          <img src={img1} alt="SPO" className=" pt-12 mt-12" />
          <img src={img2} alt="SPO" className="  pt-12 mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
