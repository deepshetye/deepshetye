import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-[#F7F9FC] px-8 min-h-screen font-ubermove dark:bg-black md:px-20">
        <Header setDarkMode={setDarkMode} />
        <Footer />
      </main>
    </div>
  );
};

export default About;
