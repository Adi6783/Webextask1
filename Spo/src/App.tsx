// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlacementInsights from './pages/PlacementInsights';
import InternshipInsights from './pages/InternshipInsights';
import Roadmaps from './pages/Roadmaps';
import Resumes from './pages/Resumes';
import PreparationResources from './pages/PreparationResources';
import FAQs from './pages/FAQs';
import MockCodingTests from './pages/MockCodingTests';
import ResumePage from './pages/ResumePage';
import Resource from './pages/Resource';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import CodeEditor from './pages/CodeEditor';
import './App.css'; // Import Tailwind CSS styles

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/placement-insights" Component={PlacementInsights} />
            <Route path="/internship-insights" Component={InternshipInsights} />
            <Route path="/roadmaps" Component={Roadmaps} />
            <Route path="/resumes" Component={Resumes} />
            <Route path="/preparation-resources" Component={PreparationResources} />
            <Route path="/faqs" Component={FAQs} />
            <Route path="/mock-coding-tests" Component={MockCodingTests} />
            <Route path="/resumepage" Component={ResumePage} />
            <Route path="/resource" Component={Resource} />
            <Route path="/codeeditor" Component={CodeEditor} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
