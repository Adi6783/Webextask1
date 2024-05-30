import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PreparationResourcesProps = {
  children?: ReactNode;
};

const Card: React.FC<{ label: string }> = ({ label }) => {
 
  return (
    <div className="bg-green-500 text-white border border-green-700 shadow-md rounded-lg p-6 m-1 w-full max-w-xs">
      <h2 className="text-2xl font-semibold">{label}</h2>
      
    </div>
  );
};

const PreparationResources: React.FC<PreparationResourcesProps> = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (name: string) => {
    setSelectedCourse(name);
    navigate('/resource'); // Navigate to '/resumepage' route
  };
  const disciplines = [
    "Computer Science",
    "Mathematics",
    "Statistics",
    "Electrical Engineering",
    "Economics",
    "Mechanical Engineering",
    "Aerospace Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "BSBE",
    "Earth Sciences",
  ];

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Preparation Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {disciplines.map((discipline, index) => (
          <div  onClick={() => handleCardClick(discipline)}>
          <Card key={index} label={discipline} />
          {selectedCourse}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreparationResources;
