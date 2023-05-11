import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-[#F7F9FC] px-8 min-h-screen font-ubermove dark:bg-black md:px-20">
        <Header setDarkMode={setDarkMode} />

        <div className="text-white">
          POSITION OF RESPONSIBILITY Google developer student club — Web
          development Lead JUN 2022 - MAY 2023 PROFILE LINK Guiding students in
          their development journey from building websites, mobile apps to
          deploying them on instances. Coding Blocks — Campus Ambassador JAN
          2022 - DEC 2022 Conducted online sessions on web development for 100+
          registered students.. ECell NITG — Vice President NOV 2021 - OCT 2022
          Conducted various events and programmes. Spectra — Tech lead NOV 2021
          - FEB 2022 Student Mentor : Taught the basics of programming to
          juniors Class Representative DEC 2020 - SEPT 2021
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default About;
