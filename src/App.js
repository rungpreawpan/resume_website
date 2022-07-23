import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" index={true} element={<Home />} />
      <Route path="resume" index={true} element={<Resume />} />
      <Route path="projects" index={true} element={<Projects />} />
      <Route path="contact" index={true} element={<Contact />} />
      {/* <Route path="/">
        <Route index={true} element={<Home />} />
      </Route>
      <Route path="resume">
        <Route index={true} element={<Resume />} />
      </Route>
      <Route path="projects">
        <Route index={true} element={<Projects />} />
      </Route>
      <Route path="contact">
        <Route index={true} element={<Contact />} />
      </Route> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
