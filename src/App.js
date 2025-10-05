import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/content';
import Dashboard from './pages/dashboard';
import Contact from './pages/contact';
import About from './pages/about';
import Praktik2 from './pages/praktik2';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content" element={<Content />} />
          <Route path="/praktik2" element={<Praktik2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
