import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import {
  BsCode,
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Banner from "../components/Banners";

const images = [
  "C++",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
  "Docker",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
].map((image, i) => ({
  id: i,
  image,
}));

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Deep Shetye</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-8 font-ubermove dark:bg-gray-900 md:px-20">
        <section className="">
          <nav className="py-6 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">deepshetye</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/1r3kL8_YqUM-9rULN_WJwAbtd1OfD7grTZjWYX4TNLs8/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row md:justify-between md:max-h-[80vh] md:py-24 items-center">
            <div className="text-left mt-8 md:mt-0">
              <h2 className="text-3xl text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
                👋 Hey there,
              </h2>
              <h2 className="text-5xl mt-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                I&apos;m <span className="font-semibold">Deep Shetye.</span>
              </h2>
              <h3 className="text-xl mt-4 dark:text-white md:text-3xl">
                Full Stack Developer and UI Designer.
              </h3>
              <p className="text-md pt-1 pb-3 md:py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                I speak in {"<Code/>"} so you don&apos;t have to. Helping people
                turn their ideas into sites & apps that work. Connect with me
                and let&apos;s get cracking!
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

                <div className="text-2xl cursor-pointer flex pr-5 py-2 text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/deepshetye"
                  >
                    <BsTwitter />
                  </a>
                </div>

                <div className="text-2xl cursor-pointer flex py-2 text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://leetcode.com/deepshetye"
                  >
                    <BsCode />
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

        <section className="mt-4">
          <div>
            <h3 className="text-2xl mb-3 dark:text-white">Services i offer</h3>
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
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl mb-10 mt-6 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl mb-10 mt-6 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

        <section className="py-10">
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
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
