import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { useDarkMode } from '../context/DarkModeContext';
import deved from '../public/dev-ed-wave.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import Banner from '../components/Banners';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const images = [
  'React Native',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'AWS',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Redux',
  'TailwindCSS',
  'NestJS',
  'Python',
  'OpenAI',
  'Supabase',
  'Git',
  'C++',
].map((image, i) => ({
  id: i,
  image,
}));

export default function Home() {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className=" bg-[#F7F9FC] px-5 font-ubermove dark:bg-black md:px-20">
        <Header />

        <section className="">
          <div className="flex flex-col md:flex-row md:justify-between md:max-h-[80vh] md:py-24 items-center">
            <div className="text-left mt-8 md:mt-0">
              <h2 className="text-3xl text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
                👋 Hey there,
              </h2>
              <h2 className="text-5xl mt-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                I&apos;m <span className="font-semibold">Deep Shetye.</span>
              </h2>
              <h3 className="text-xl mt-4 dark:text-white md:text-3xl">
                Senior Mobile Engineer & Full Stack Developer.
              </h3>
              <p className="text-md pt-1 pb-3 md:py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                4+ years leading cross-functional teams building scalable
                banking apps and AI-powered platforms. Currently Head of Mobile
                Development at ImpactoDigifin, architecting systems serving
                5,000+ users.
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="text-2xl cursor-pointer flex pr-6 py-2 text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deepshetye"
                  >
                    <BsGithub />
                  </a>
                </div>

                <div className="text-2xl cursor-pointer flex pr-6 py-2 text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/deepshetye"
                  >
                    <BsLinkedin />
                  </a>
                </div>

                {/* <div className="text-2xl cursor-pointer flex pr-5 py-2 text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/deepshetye"
                  >
                    <BsTwitter />
                  </a>
                </div> */}

                <div className="text-2xl cursor-pointer flex py-2 text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://leetcode.com/deepshetye"
                  >
                    <SiLeetcode />
                  </a>
                </div>
              </div>
            </div>
            <div className="my-5 md:my-0">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden md:h-96 md:w-96">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-7">
          <h3 className="text-2xl mb-5 dark:text-white">
            Technologies used by me
          </h3>
          <Banner images={images} speed={20000} />
        </section>

        {/* <section className="mt-4">
          <div>
            <h3 className="text-2xl mb-2 dark:text-white">Services i offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance developer,
              I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl mb-10 mt-6 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Frontend
              </h3>
              <p className="py-2">
                From creating elegant ui designs to building them. I can help
                you with both.
              </p>
              <h4 className="pt-3 pb-1 text-teal-600">Frontend Tools I Use</h4>
              <span className="text-gray-800 ml-1">
                Figma, ReactJS, React Native, NextJS, TailwindCSS
              </span>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl mb-10 mt-6 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Robust Backend</h3>
              <p className="py-2">
                A good backend is the backbone of any application. I can help
                you build one.
              </p>
              <h4 className="pt-3 pb-1 text-teal-600">Backend Tech I Use</h4>
              <span className="text-gray-800 ml-1">
                NodeJs, Express, Firebase, PostgreSQL, MongoDB
              </span>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl mb-10 mt-6 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">DevOps</h3>
              <p className="py-2">
                Well, I can host your your websites and apps too. I can help you
                with that.
              </p>
              <h4 className="pt-3 pb-1 text-teal-600">DevOps</h4>
              <span className="text-gray-800 ml-1">
                Docker, AWS, Vercel, Github, Gitlab
              </span>
            </div>
          </div>
        </section> */}

        {/* <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section> */}

        <section className="py-4 flex flex-col md:grid grid-cols-12 gap-7 md:gap-10">
          <div
            onClick={() => router.push('/work')}
            className="col-span-5 p-8 cursor-pointer group flex flex-col md:flex-row border-[1px] border-[#ffffff20] bg-white dark:bg-transparent bg-gradient-from-tl bg-gradient-to-br from-[#ffffff30] to-[#ffffff10] rounded-3xl"
          >
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/my-works.png"
              className="h-28 mx-auto md:mr-3 w-fit"
            />

            <div className="flex flex-col py-3 w-full relative">
              <div className="dark:text-[#ffffff50] text-gray-500 text-xs">
                EXPERIENCE
              </div>

              <div className="dark:text-[#ffffff] text-xl">
                Explore all my works here.
              </div>

              <img
                src={
                  darkMode
                    ? 'https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg'
                    : 'https://wpriverthemes.com/landing/gridx-html/assets/images/icon-2.svg'
                }
                className="h-8 bottom-2 right-1 flex-1 absolute group-hover:opacity-100 opacity-50"
              />
            </div>
          </div>

          <div
            onClick={() => router.push('/about')}
            className="col-span-7 p-8 cursor-pointer group flex border-[1px] border-[#ffffff20] bg-white dark:bg-transparent dark:bg-gradient-from-tl bg-gradient-to-br from-[#ffffff30] to-[#ffffff10] rounded-3xl"
          >
            <div className="flex flex-col py-3 w-full relative">
              <div className="dark:text-[#ffffff50] text-gray-500 text-xs">
                EDUCATION
              </div>

              <div className="dark:text-[#ffffff] text-xl">
                National Institute Of Technology, Goa
              </div>

              <div className="dark:text-[#ffffff80] text-gray-500 text-base">
                Bachelor Of Technology in Electronics & Communication
                Engineering
              </div>
              <div className="dark:text-[#ffffff80] text-gray-500 text-sm">
                Dec 2020 - May 2024 | GPA: 8.6/10
              </div>

              <img
                src={
                  darkMode
                    ? 'https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg'
                    : 'https://wpriverthemes.com/landing/gridx-html/assets/images/icon-2.svg'
                }
                className="h-8 bottom-2 right-1 flex-1 absolute group-hover:opacity-100 opacity-50"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
