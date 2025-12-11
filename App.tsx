import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;