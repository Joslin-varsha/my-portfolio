import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects'
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><About /><Education/><Skills/><Experience/><Projects/><Certification/><Contact/><Footer/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

