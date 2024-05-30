import React from 'react';

const Resource: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Computer Science Preparation Resources</h1>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to the Computer Science preparation resources page. Here, you will find a comprehensive collection of
            materials to help you master the fundamentals and advanced topics in computer science.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Algorithms and Data Structures:</strong> Understanding algorithms and data structures is crucial for any
            computer scientist. Focus on learning about arrays, linked lists, stacks, queues, trees, graphs, sorting, and
            searching algorithms.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Programming Languages:</strong> Gain proficiency in at least one programming language such as Python, Java,
            or C++. Practice writing clean, efficient, and maintainable code. Participate in coding challenges and
            competitions to sharpen your skills.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Software Development:</strong> Learn about software development methodologies, version control systems like
            Git, and tools for continuous integration and deployment. Understand the principles of software design and
            architecture.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Theory of Computation:</strong> Study the theoretical underpinnings of computer science including automata
            theory, formal languages, and computability. This knowledge will help you understand the limits of what can be
            computed.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Systems:</strong> Dive into operating systems, computer networks, and databases. Learn how these systems
            work, how they are designed, and how to use them effectively.
          </p>
          <p className="text-lg leading-relaxed">
            We hope these resources will aid you in your studies and help you achieve your goals in the field of computer
            science. Happy learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resource;
