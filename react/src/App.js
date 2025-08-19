import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Career from './pages/Career';
import Demo from './pages/Demo';

/**
 * Top‑level application component.  Renders the navigation bar,
 * whichever page is selected via React Router and the site footer.  The
 * content is wrapped in a div so that the sticky navigation bar does
 * not overlap the first section.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/career" element={<Career />} />
          <Route path="/demo" element={<Demo />} />
          {/* Catch‑all route for unknown paths */}
          <Route
            path="*"
            element={
              <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h1>Page Not Found</h1>
                <p>The page you’re looking for doesn’t exist.</p>
              </main>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;