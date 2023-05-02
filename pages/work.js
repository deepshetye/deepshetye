import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsGithub, BsLink, BsLink45Deg } from 'react-icons/bs';

const tabs = [
  {
    name: 'Internships',
    projects: [
      {
        name: 'Supervise',
        duration: 'Feb 2023 - Present',
        stacks: ['NextJS v13', 'TypeScript', 'NodeJs', 'Supabase', 'Railway'],
      },
      {
        name: 'UbGot Software Pvt Ltd',
        duration: 'Nov 2022 - Jan 2023',
        stacks: ['cd', 'vf', 'vdfv'],
      },
      {
        name: 'Apex hospitals',
        duration: 'Jul 2022 - Oct 2022',
        stacks: ['cd', 'vf', 'vdfv'],
      },
      {
        name: 'Celetel',
        duration: 'Feb 2022 - Jun 2022',
        stacks: ['cd', 'vf', 'vdfv'],
      },
      {
        name: 'Maxxed',
        duration: 'Nov 2021 - Jan 2022',
        link: '',
        stacks: ['ReactJS', 'MongoDB', 'NodeJS', 'ExpressJS'],
      },
    ],
  },
  { name: 'Freelance', projects: [] },
  { name: 'Projects', projects: [] },
];

const Work = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [step, setStep] = useState(0);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-[#F7F9FC] min-h-screen px-8 font-ubermove dark:bg-black md:px-20">
        <Header setDarkMode={setDarkMode} />

        <div className="flex gap-5 justify-center">
          {tabs.map((tab, index) => (
            <div
              className={`text-center border-b cursor-pointer ${
                step === index ? 'border-white' : 'border-transparent'
              } text-white`}
              onClick={() => setStep(index)}
            >
              <div
                className={`px-1.5 ${
                  step === index ? 'bg-[#ffffff30]' : ''
                } rounded-sm mb-1`}
              >
                {tab.name}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 py-7">
          {tabs[step].projects.map((project, index) => (
            <div className="p-4 border border-[#ffffff50] bg-gradient-to-br from-[#ffffff20] to-[#ffffff09] text-white rounded-md">
              <div className="border-b flex justify-between items-center border-gray-400 pb-2">
                <div className="flex gap-1">
                  <div className="bg-red-600 rounded-full h-3 w-3" />
                  <div className="bg-yellow-500 rounded-full h-3 w-3" />
                  <div className="bg-green-600 rounded-full h-3 w-3" />
                </div>

                <div className="flex gap-2">
                  <BsLink45Deg className="text-lg cursor-pointer" />
                  <BsGithub className="text-lg cursor-pointer" />
                </div>
              </div>

              <div className="py-2 flex flex-col">
                <div>{project.name}</div>
                <div className="text-sm text-gray-400">{project.duration}</div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {project.stacks.map((stack, i) => (
                    <div className="bg-[#ffffff30] px-2 rounded-sm text-sm">
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Work;
