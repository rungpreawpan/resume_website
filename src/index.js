import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './pages/Home/Home';
// import Resume from './pages/Resume/Resume';
// import Projects from './pages/Projects/Projects';
// import Contact from './pages/Contact/Contact';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
);
