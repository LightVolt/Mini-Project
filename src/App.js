import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';       
import Transcript from './Transcript';
import Project1Detail from './Project1Detail';

function App() {
  return (
    <Router basename="/Mini-Project">
      <div className="min-h-screen bg-brand-bg text-brand-text transition-colors duration-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/project1detail" element={<Project1Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;