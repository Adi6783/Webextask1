
import React, { ReactNode } from 'react';

type PlacementInsightsProps = {
  children?: ReactNode;
};

const placements = [
  { date: '2023-09-14', name: 'Abhinav Agarwal', company: 'Piramal' },
  { date: '2023-09-14', name: 'Abhinav D Singh', company: 'McKinsey & Company' },
  { date: '2023-09-14', name: 'Abhishek Gurjar', company: 'SAP Labs' },
  { date: '2023-09-14', name: 'Aditi', company: 'Rakuten Mobile' },
  { date: '2023-09-14', name: 'Aditya Gupta', company: 'Square Point Capital' },
  { date: '2023-09-14', name: 'Akarsh Mittal', company: 'Bain and Co.' },
  { date: '2023-09-14', name: 'Akash Chavan', company: 'Rakuten Mobile' },
  { date: '2023-09-14', name: 'Akhila Mudupu', company: 'Tata Steel' },
  { date: '2023-09-14', name: 'Akshat Goyal', company: 'McKinsey & Company' },
  { date: '2023-09-14', name: 'Akshay kumar Prasad', company: 'Reliance Industries Limited' },
  { date: '2023-09-14', name: 'Ananya Singh', company: 'Groww' },
  { date: '2023-09-14', name: 'Anirudh Meena', company: 'Samsung R&D Delhi' },
  { date: '2023-09-14', name: 'Anubhav Kalyani', company: 'Sprinklr' },
  { date: '2023-09-14', name: 'Anuj Gupta', company: 'Texas Instruments' },
  { date: '2023-09-14', name: 'Anurag Tyagi', company: 'Walmart Global Tech' },
  { date: '2023-09-14', name: 'Anushka Sreshth', company: 'Infosys (Wongdoody – their design vertical)' },
  { date: '2023-09-14', name: 'Arpit Kumar', company: 'Make My Trip' },
  { date: '2023-09-14', name: 'Arpit Singh', company: 'Cohesity' },
  { date: '2023-09-14', name: 'Ayush Barnwal', company: 'Jaguar Land Rover' },
  { date: '2023-09-14', name: 'Ayush Sakya', company: 'Glean' },
  { date: '2023-09-14', name: 'BHAVIKA RANGWANI', company: 'J P Morgan and Chase' },
  { date: '2023-09-14', name: 'Chinmayee Phalak', company: 'Oracle' },
  { date: '2023-09-14', name: 'Deepak Kumar', company: 'Samsung Noida' },
  { date: '2023-09-14', name: 'Deepanshu Bisht', company: 'Bajaj Auto Ltd.' },
  { date: '2023-09-14', name: 'Deshanki Singhal', company: 'Groww' },
  { date: '2023-09-14', name: 'Divyansh Garg', company: 'SquarePoint Capital' },
  { date: '2023-09-14', name: 'Faizan Ahmad Shah', company: 'JLR' },
  { date: '2023-09-14', name: 'Gaurav Chauhan', company: 'Hilabs' },
  { date: '2023-09-14', name: 'Gedala Sai Praveen', company: 'Signal Chip' },
  { date: '2023-09-14', name: 'Ghanshyam Prashant Waindeshkar', company: 'Navi' },
  { date: '2023-09-14', name: 'Harsh Mishra', company: 'JP Morgan Chase' },
  { date: '2023-09-14', name: 'Hem Shah', company: 'Nomura' },
  { date: '2023-09-14', name: 'Jahnvi Tripathi', company: 'Barclays' },
  { date: '2023-09-14', name: 'Jai Wason', company: 'Barclays Bank' },
  { date: '2023-09-14', name: 'Jatin Garg', company: 'Capital One' },
  { date: '2023-09-14', name: 'Jeet Sarangi', company: 'Juniper Networks' },
  { date: '2023-09-14', name: 'Khushboo Sachdeva', company: 'Finmechanics' },
  { date: '2023-09-14', name: 'KRATIK AGRAWAL', company: 'JP Morgan Chase & Co.' },
  { date: '2023-09-14', name: 'Kratika Agarwal', company: 'Housing.com' },
  { date: '2023-09-14', name: 'Lakshay Middha', company: 'Rakuten Mobile' },
  { date: '2023-09-14', name: 'Lakshay Rastogi', company: 'Bain and Company' },
  { date: '2023-09-14', name: 'M Shiva Teja Reddy', company: 'Airbus' },
  { date: '2023-09-14', name: 'Madyahnam Parashu Ramudu', company: 'EATON' },
  { date: '2023-09-14', name: 'Mandar Bapat', company: 'Google' },
  { date: '2023-09-14', name: 'Maryam Khan', company: 'Business Analyst' },
  { date: '2023-09-14', name: 'Mukund Soni', company: 'Fourth-Frontier Technologies' },
  { date: '2023-09-14', name: 'Munish Gupta', company: 'Da Vinci Derivatives.' },
  { date: '2023-09-14', name: 'Muskan', company: 'Kivi Securities' },
  { date: '2023-09-14', name: 'N Bhuvan', company: 'Jaguar Land rover India Limited,' },
  { date: '2023-09-14', name: 'Namratesh Shukla', company: 'Capital one' },
  { date: '2023-09-14', name: 'Nandita Gupta', company: 'Alvarez and Marsal' },
  { date: '2023-09-14', name: 'Nandni Sinha', company: 'Alvarez and Marsal' },
  { date: '2023-09-14', name: 'Nilay Beniwal', company: 'Walmart' },
  { date: '2023-09-14', name: 'Nishima Panwar', company: 'Capital One' },
  { date: '2023-09-14', name: 'Piyush Agarwal', company: 'SAP Labs and Developer Associate' },
  { date: '2023-09-14', name: 'Piyush Tiwari', company: 'Captial one' },
  { date: '2023-09-14', name: 'pradeep kumar choudhary', company: 'KBR' },
  { date: '2023-09-14', name: 'Prakarsh Agrawal', company: 'Navi' },
  { date: '2023-09-14', name: 'Prakhar Maheshwari', company: 'Apple' },
  { date: '2023-09-14', name: 'Protyaydeep Shee', company: 'Housing.com' },
  { date: '2023-09-14', name: 'Rahul', company: 'Hilabs' },
  { date: '2023-09-14', name: 'Reuben Mendonsa', company: 'Tata Advance System Limited' },
  { date: '2023-09-14', name: 'Rhythm Chouksey', company: 'PineLabs' },
  { date: '2023-09-14', name: 'Rishik Jain', company: 'Infurnia' },
  { date: '2023-09-14', name: 'Rohit Kakkar', company: 'Jio Platform' },
  { date: '2023-09-14', name: 'S Sruthi', company: 'Applied Materials' },
  { date: '2023-09-14', name: 'Saaransh Aggarwal', company: 'Maverick Derivatives' },
  { date: '2023-09-14', name: 'Samarth Choudhary', company: 'Signal Chip' },
  { date: '2023-09-14', name: 'Sandeep Patwa', company: 'Signal Chip' },
  { date: '2023-09-14', name: 'Sandipan Mitra', company: 'Auronova Consulting' },
  { date: '2023-09-14', name: 'Saurabh Sahu', company: 'Signal Chip' },
  { date: '2023-09-14', name: 'Shikhar Saroj Verma', company: 'Flipkart' },
  { date: '2023-09-14', name: 'Shreya Karmakar', company: 'Data Science Analyst' },
  { date: '2023-09-14', name: 'Sridhar Bheemani', company: 'Juniper Networks' },
  { date: '2023-09-14', name: 'Supratim Paul', company: 'TSMC' },
  { date: '2023-09-14', name: 'Tanikella Sai Kiran', company: 'Intel' },
  { date: '2023-09-14', name: 'Utkarsh', company: 'Eaton' },
  { date: '2023-09-14', name: 'Utkarsh Verma', company: 'Sprinklr' },
  { date: '2023-09-14', name: 'Varun Soni', company: 'Ford Motor' },
  { date: '2023-09-14', name: 'Veer Bhadra Yadav', company: 'Sprinklr' },
  { date: '2023-09-14', name: 'Videh Aggarwal', company: 'Morgan Stanley' },
  { date: '2023-09-14', name: 'Yash Burnwal', company: 'Nomura' },
  { date: '2023-09-14', name: 'Yogesh Kumar Baswal', company: 'Qualcomm India Private Limited' },
];

const PlacementInsights: React.FC<PlacementInsightsProps> = () => {
  return (
    <div className="py-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Placement Insights 2023</h1>
        <div className="grid grid-cols-3 gap-4 text-center font-semibold">
          <div>Date</div>
          <div>Name</div>
          <div>Company</div>
        </div>
        {placements.map((placement, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 text-center py-4 border-b last:border-b-0"
          >
            <div>{placement.date}</div>
            <div>{placement.name}</div>
            <div>{placement.company}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementInsights;
