// pages/Roadmaps.tsx
import React, { useState } from 'react';

type RoadmapProps = {
  children?: React.ReactNode;
};

const roadmapNames = [
  'Product Management',
  'Analyst',
  'Mechanical Core',
  'Electrical Core',
  'Aero Core',
  'Consultancy',
  'MSE Core',
  'CHE Core',
  'SDE'
];

const Roadmaps: React.FC<RoadmapProps> = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);

  const handleCardClick = (name: string) => {
    setSelectedRoadmap(name);
  };

  return (
    <div className="py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Roadmaps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        {roadmapNames.map((name, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:bg-blue-100"
            onClick={() => handleCardClick(name)}
          >
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
        ))}
      </div>
      {selectedRoadmap && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl text-center">
          <p className="text-lg">This is the roadmap for {selectedRoadmap}</p>
        </div>
      )}
    </div>
  );
};

export default Roadmaps;
