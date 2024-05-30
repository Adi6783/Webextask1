
import React, { ReactNode } from 'react';

type InternshipInsightsProps = {
  children?: ReactNode;
};

const internships = [
  { date: '2023-06-21', name: 'Abhishek Pardhi', company: 'Summer Intern at Sprinklr' },
  { date: '2023-06-21', name: 'Adarsh Kumar', company: 'Summer Intern at Jaguar Land Rover India Limited' },
  { date: '2023-06-21', name: 'Aditya Anand', company: 'Summer Intern at Edelweiss' },
  { date: '2023-06-21', name: 'Aditya Tanwar', company: 'Summer Intern at Tower Research Capital' },
  { date: '2023-06-21', name: 'Akanksha Singh', company: 'Summer Intern at Bain & Company' },
  { date: '2023-06-21', name: 'Akhil Jain', company: 'Summer Intern at DE Shaw India' },
  { date: '2023-06-21', name: 'Akshay K Muraleedharan', company: 'Summer Intern at NVIDIA' },
  { date: '2023-06-21', name: 'Alok Kumar Thakur', company: 'Summer Intern at Amazon' },
  { date: '2023-06-21', name: 'Amit Jain', company: 'Summer Intern at Amazon' },
  { date: '2023-06-21', name: 'Anmol Pabla', company: 'Summer Intern at Morgan Stanley' },
  { date: '2023-06-21', name: 'Ansh Saxena', company: 'Summer Intern at Alphagrep Securities' },
  { date: '2023-06-21', name: 'Anshul Jain', company: 'Summer Intern at Accenture' },
  { date: '2023-06-21', name: 'Anshuman', company: 'Summer Intern at Walmart' },
  { date: '2023-06-21', name: 'Anushka Panda', company: 'Summer Intern at Microsoft India' },
  { date: '2023-06-21', name: 'Armeet Singh Luthra', company: 'Summer Intern at Piramal Pharma Solutions' },
  { date: '2023-06-21', name: 'Arnav Gupta', company: 'Summer Intern at Tower Research' },
  { date: '2023-06-21', name: 'Arpit Kumar Rai', company: 'Summer Intern at Glean' },
  { date: '2023-06-21', name: 'Aryaman Singhal', company: 'Summer Intern at Morgan Stanley' },
  { date: '2023-06-21', name: 'Aryan Sharma', company: 'Summer Intern at Quantbox' },
  { date: '2023-06-21', name: 'Aryan Vora', company: 'Summer Intern at Bain & Company' },
  { date: '2023-06-21', name: 'Aryash Pateriya', company: 'Summer Intern at Boston Consulting Group' },
  { date: '2023-06-21', name: 'Avi Kumar', company: 'Summer Intern at QUADEYE' },
  { date: '2023-06-21', name: 'Avinash Prasad', company: 'Summer Intern at Goldman Sachs' },
  { date: '2023-06-21', name: 'Ayush Gupta', company: 'Summer Intern at Amazon' },
  { date: '2023-06-21', name: 'Ayush Kumar', company: 'Summer Intern at Texas Instruments' },
  { date: '2023-06-21', name: 'Deepanshi Maheshwari', company: 'Summer Intern at JSW' },
  { date: '2023-06-21', name: 'Devansh Agarwal', company: 'Summer Intern at Uber' },
  { date: '2023-06-21', name: 'Devansh Kumar Jha', company: 'Summer Intern at KLA Tencor' },
  { date: '2023-06-21', name: 'Dibyajyoti Haloi', company: 'Summer Intern at Texas Instruments' },
  { date: '2023-06-21', name: 'Divyansh Gupta', company: 'Summer Intern at Amazon' },
  { date: '2023-06-21', name: 'Faheem Nizar', company: 'Summer Intern at American Express' },
  { date: '2023-06-21', name: 'Garvit Arora', company: 'Summer Intern at Samsung Electronics, South Korea' },
  { date: '2023-06-21', name: 'Girik Maskara', company: 'Summer Intern at Jane Street' },
  { date: '2023-06-21', name: 'Harjap Singh', company: 'Summer Intern at Piramal Groups' },
  { date: '2023-06-21', name: 'Harsh Jain', company: 'Summer Intern at Samsung Electronics Co., Ltd' },
  { date: '2023-06-21', name: 'Harsh Trivedi', company: 'Summer Intern at Quantbox' },
  { date: '2023-06-21', name: 'Hisham Hadi T', company: 'Summer Intern at Google Hardware' },
  { date: '2023-06-21', name: 'Hitesh Anand', company: 'Summer Intern at Quadeye Securities' },
  { date: '2023-06-21', name: 'Ishaan Shukla', company: 'Summer Intern at Oracle, India' },
  { date: '2023-06-21', name: 'Ishan Bawne', company: 'Summer Intern at Finmechanics' },
  { date: '2023-06-21', name: 'Jahnavi Kairamkonda', company: 'Summer Intern at Uber' },
  { date: '2023-06-21', name: 'Janhvi Rochwani', company: 'Summer Intern at Goldman Sachs' },
  { date: '2023-06-21', name: 'Jasjot Singh', company: 'Summer Intern at Adobe' },
  { date: '2023-06-21', name: 'Jaya Gupta', company: 'Summer Intern at Quadeye Securities' },
  { date: '2023-06-21', name: 'Kajal Deep', company: 'Summer Intern at Goldman Sachs' },
  { date: '2023-06-21', name: 'Kartikeya Raghuvanshi', company: 'Summer Intern at Microsoft' },
  { date: '2023-06-21', name: 'KASHISHPREET KAUR', company: 'Summer Intern at American Express' },
  { date: '2023-06-21', name: 'Kavya Jalan', company: 'Summer Intern at Jaguar Land Rover' },
  { date: '2023-06-21', name: 'Kuldeep Singh Chouhan', company: 'Summer Intern at Amazon' },
  { date: '2023-06-21', name: 'Kunwar Preet Singh', company: 'Summer Intern at Optiver' },
  { date: '2023-06-21', name: 'Kushagra Sharma', company: 'Summer Intern at Quadeye' },
  { date: '2023-06-21', name: 'Kushal Gehlot', company: 'Summer Intern at APT Portfolio' },
  { date: '2023-06-21', name: 'Lavanya Atul Ingle', company: 'Summer Intern at Mitsubishi Heavy Industries Ltd' },
  { date: '2023-06-21', name: 'Mabsar Karim', company: 'Summer Intern at Edelweiss' },
  { date: '2023-06-21', name: 'Mohan Krishna', company: 'Summer Intern at Jaguar Land Rover' },
  { date: '2023-06-21', name: 'Mohd Umam', company: 'Summer Intern at Goldman Sachs' },
  { date: '2023-06-21', name: 'Mrinal Kumar', company: 'Summer Intern at Goldman Sachs' },
  { date: '2023-06-21', name: 'Muditt Khurana', company: 'Summer Intern at World Quant' },
  
  
];

const InternshipInsights: React.FC<InternshipInsightsProps> = () => {
  return (
    <div className="py-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Internship Insights 2023</h1>
        <div className="grid grid-cols-3 gap-4 text-center font-semibold">
          <div>Date</div>
          <div>Name</div>
          <div>Company</div>
        </div>
        {internships.map((internship, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 text-center py-4 border-b last:border-b-0"
          >
            <div>{internship.date}</div>
            <div>{internship.name}</div>
            <div>{internship.company}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipInsights;
