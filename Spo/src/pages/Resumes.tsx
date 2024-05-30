import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ResumeProps = {
  children?: React.ReactNode;
};

const resumeNames = [
  'Resume set 2023',
  'Resume set 2022',
  'Resume set 2021',
  'Resume set 2020',
  'Resume set 2019',
  'Resume set 2018',
  'Resume set 2017',
  'Resume set 2016',
  'Resume set 2015'
];

const Resumes: React.FC<ResumeProps> = () => {
  const [selectedResume, setSelectedResume] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (name: string) => {
    setSelectedResume(name);
    navigate('/resumepage'); 
  };

  return (
    <div className="py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Resumes</h1>
      <div className="flex flex-col w-full max-w-4xl">
        {resumeNames.map((name, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:bg-blue-600 mb-4"
            onClick={() => handleCardClick(name)}
          >
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
        ))}
      </div>
      {selectedResume && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl text-center">
          <p className="text-lg">Displaying {selectedResume}</p>
          
          <div className="bg-white p-4 rounded-md shadow-inner">
            <p>Content for {selectedResume} goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resumes;
