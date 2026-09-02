import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Certifications } from './pages/Certifications';
import { EducationPage } from './pages/Education';
import { ExperiencePage } from './pages/Experience';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Helper component to reset scroll position on route change
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        
        {/* Navbar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Viewport */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home onOpenResumeModal={() => setIsResumeModalOpen(true)} />} />
            <Route path="/about" element={<About onOpenResumeModal={() => setIsResumeModalOpen(true)} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
