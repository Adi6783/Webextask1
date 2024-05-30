
import { Link } from 'react-router-dom';

export function Navbar(){
  return (
    <nav className="bg-blue-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">SPO IIT-K</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/placement-insights" className="text-white">Placement Insights</Link></li>
          <li><Link to="/internship-insights" className="text-white">Internship Insights</Link></li>
          <li><Link to="/roadmaps" className="text-white">Roadmaps</Link></li>
          <li><Link to="/resumes" className="text-white">Resumes</Link></li>
          <li><Link to="/preparation-resources" className="text-white">Preparation Resources</Link></li>
          <li><Link to="/faqs" className="text-white">FAQs</Link></li>
          <li><Link to="/mock-coding-tests" className="text-white">Mock Coding Tests</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
