import React, { useState } from 'react';

type FAQsProps = {};

const FAQs: React.FC<FAQsProps> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  
  const handleQuestionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuestion(event.target.value);
  };

  
  const generateRandomAnswer = () => {
   
    const answers: Record<string, string> = {
      "What are the restrictions on resume format?": "The resume format should be in PDF.",
      "What should be the name of the resume file (one page)?": "The resume file should be named as 'Firstname_Lastname_Resume.pdf'.",
      "How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?": "You can mention them under the 'Education' section.",
      "I don't have any proof for some points on my resume, but I can provide them after campus reopens. What should I do?": "You can mention them as 'To be provided' and provide the proof later.",
      "When is a Project Verification Form (PVF) required?": "PVF is required for verifying significant projects.",
      "How will my PoR/projects under the institute clubs be verified?": "They will be verified by the respective club coordinators.",
      "I have some Self projects, how will they be verified?": "You can provide links to your GitHub repository or project demos.",
      "How to verify online courses/online projects?": "You can provide certificates or proof of completion.",
      "Is proof required for Extracurricular points?": "Yes, proof may be required for extracurricular points.",
      "My internship/project is ongoing and will not be finished before resume submission. What should I do?": "You can mention it as 'Ongoing' in your resume.",
      "Can I update my resume after the deadline?": "Updates after the deadline may not be allowed, check with the concerned authority.",
      "Will the Summer CPI be included?": "Yes, Summer CPI will be included in your resume."
    };

    return answers[selectedQuestion as string] || "Select a question to see the answer.";
  };

  return (
    <div className="py-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">FAQs</h1>
        <div className="flex justify-center mb-8">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-96 focus:outline-none"
            onChange={handleQuestionSelect}
            value={selectedQuestion || ""}
          >
            <option value="">Select a question</option>
            <option value="What are the restrictions on resume format?">What are the restrictions on resume format?</option>
            <option value="What should be the name of the resume file (one page)?">What should be the name of the resume file (one page)?</option>
            <option value="How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?">How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?</option>
            <option value="I don't have any proof for some points on my resume, but I can provide them after campus reopens. What should I do?">I don't have any proof for some points on my resume, but I can provide them after campus reopens. What should I do?</option>
            <option value="When is a Project Verification Form (PVF) required?">When is a Project Verification Form (PVF) required?</option>
            <option value="How will my PoR/projects under the institute clubs be verified?">How will my PoR/projects under the institute clubs be verified?</option>
            <option value="I have some Self projects, how will they be verified?">I have some Self projects, how will they be verified?</option>
            <option value="How to verify online courses/online projects?">How to verify online courses/online projects?</option>
            <option value="Is proof required for Extracurricular points?">Is proof required for Extracurricular points?</option>
            <option value="My internship/project is ongoing and will not be finished before resume submission. What should I do?">My internship/project is ongoing and will not be finished before resume submission. What should I do?</option>
            <option value="Can I update my resume after the deadline?">Can I update my resume after the deadline?</option>
            <option value="Will the Summer CPI be included?">Will the Summer CPI be included?</option>
          </select>
        </div>
        <div className="text-lg text-center bg-white rounded-lg shadow-lg p-6">
          {selectedQuestion && (
            <>
              <h2 className="font-semibold mb-4">{selectedQuestion}</h2>
              <p>{generateRandomAnswer()}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
