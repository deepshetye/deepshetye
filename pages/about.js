import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { BsLink, BsLink45Deg } from 'react-icons/bs';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // <div className={darkMode ? 'dark' : ''}>
    <div className="dark">
      <main className="bg-[#F7F9FC] px-5 md:h-screen flex flex-col font-ubermove dark:bg-black md:px-20">
        <Header setDarkMode={setDarkMode} />

        <div className="text-white flex flex-col md:grid grid-cols-12 gap-8 flex-1 overflow-hidden">
          <div className="col-span-5 flex flex-col items-center bg-[#201E20] rounded-lg md:rounded-3xl p-5 md:p-10">
            <div className="rounded-lg md:rounded-[40px] h-56 w-56 overflow-hidden mx-auto mb-4">
              <img src="dp.jpeg" className="h-56 w-56" />
            </div>
            <div className="text-xl">Deep Shetye</div>
            <div className="text-base opacity-70">Goa, India</div>

            <div className="mt-3 flex gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/deepshetye"
                className="bg-[#3e3d3e] h-10 w-10 rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/deepshetye"
                className="bg-[#3e3d3e] h-10 w-10 rounded-full flex items-center justify-center"
              >
                <FiGithub size={20} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://leetcode.com/deepshetye"
                className="bg-[#3e3d3e] h-10 w-10 rounded-full flex items-center justify-center"
              >
                <SiLeetcode size={20} />
              </a>
            </div>

            <div className="border-[0.5px] my-4 w-full" />

            <div className="w-full flex-col md:flex-row flex justify-between md:items-center">
              <div className="">Expertise :</div>
              <div>UI Designing, Frontend Development</div>
            </div>
          </div>

          <div className="col-span-7 flex flex-col flex-1 overflow-y-scroll">
            <div className="opacity-70 text-sm underline">EDUCATION</div>
            <div className="text-xl">National Institute Of Technology Goa</div>
            <div className="opacity-70 text-sm">
              Bachelor Of Technology in Electronics and Communication
            </div>
            <div className="opacity-70 text-sm">2020 - 2024</div>

            <div className="opacity-70 text-sm underline mt-7">
              ACHIEVEMENTS
            </div>

            <div className="text-lg flex items-center mt-2">
              CentuRITon Finalist — Blockchain based cross border transport
              platform
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Among top 10 finalist chosen from 375 teams across India.
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Technologies used : NextJs | Metamask | Ethereum | Tailwind |
              NodeJS | IPFS Protocol | Express | Postgres | React Native
            </div>

            <div className="text-lg flex items-center mt-2">
              Smart India Hackathon Finalist — Job Listing Platform
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Team of 4 of which 3 developers, developed a job portal for the
              Ministry of Information & Broadcasting.
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Technologies used : NextJS | Axios | Redux |NodeJS | ExpressJS |
              Prisma | PostgreSQL
            </div>

            <div className="opacity-70 text-sm underline mt-7">
              POSITION OF RESPONSIBILITY
            </div>
            <div className="text-lg flex items-center mt-1">
              Google developer student club — Web development Lead{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gdsc.community.dev/national-institute-of-technologynit-goa/"
                className="ml-3 cursor-pointer"
              >
                <BsLink45Deg size={20} />
              </a>
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Guiding students in full-stack development and deployment of web
              and mobile applications.
            </div>
            <div className="opacity-70 text-sm">JUN 2022 - MAY 2023</div>

            <div className="text-lg flex items-center mt-2">
              Coding Blocks — Campus Ambassador
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Conducted online sessions on web development for 100+ registered
              students.
            </div>
            <div className="opacity-70 text-sm">JAN 2022 - DEC 2022</div>

            <div className="text-lg flex items-center mt-2">
              ECell NITG — Vice President
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Conducted various sessions on entrepreneurship.
            </div>
            <div className="opacity-70 text-sm">NOV 2021 - OCT 2022</div>

            <div className="text-lg flex items-center mt-2">
              Spectra — Tech Lead
            </div>
            <div className="opacity-70 text-sm mb-0.5">
              Student Mentor : Taught the basics of programming to juniors
            </div>
            <div className="opacity-70 text-sm">NOV 2021 - FEB 2022</div>

            <div className="text-lg flex items-center mt-2">
              Class Representative
            </div>
            <div className="opacity-70 text-sm">DEC 2020 - SEPT 2021</div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default About;
