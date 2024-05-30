import React, { ReactNode } from 'react';

type RProps = {
  children?: ReactNode;
};

const ResumePage: React.FC<RProps> = () => {
  const placementData = [
    { name: 'Abhinav Agarwal', company: 'Piramal' },
    { name: 'Abhinav D Singh', company: 'McKinsey & Company' },
    { name: 'Abhishek Gurjar', company: 'SAP Labs' },
    { name: 'Aditi', company: 'Rakuten Mobile' },
    { name: 'Aditya Gupta', company: 'Square Point Capital' },
    { name: 'Akarsh Mittal', company: 'Bain and Co.' },
    { name: 'Akash Chavan', company: 'Rakuten Mobile' },
    { name: 'Akhila Mudupu', company: 'Tata Steel' },
    { name: 'Akshat Goyal', company: 'McKinsey & Company' },
    { name: 'Akshay Kumar Prasad', company: 'Reliance Industries Limited' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {placementData.map((placement, index) => (
        <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 w-full max-w-4xl">
          <div className="header">
            <div className="name">{placement.name}</div>
            <div className="info">{placement.company}</div>
          </div>
          <div className="section">
            <div className="section-title">Summary</div>
            <div className="section-content">
              Experienced web developer with a passion for creating efficient, scalable, and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and various frontend frameworks. Strong problem-solving skills and ability to work in a team environment.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Skills</div>
            <div className="skills">
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
              <span className="skill">JavaScript</span>
              <span className="skill">React</span>
              <span className="skill">Node.js</span>
              <span className="skill">Bootstrap</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">Experience</div>
            <div className="section-content">
              <p><strong>Frontend Developer</strong> | Jan 2018 - Present</p>
              <p>Nice coder.</p>
            </div>
          </div>
          <div className="section">
            <div className="section-title">Education</div>
            <div className="section-content">
              <p><strong>Bachelor of Technology in Computer Science</strong> - IIT-K, City | Graduated: May 2023</p>
              <p>Good coder</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResumePage;
