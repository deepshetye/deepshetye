import React from 'react';
import { useRouter } from 'next/router';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({ setDarkMode }) => {
  const router = useRouter();

  return (
    <nav className="py-6 flex justify-between dark:text-white">
      <div
        onClick={() => router.push('/')}
        className="font-burtons text-xl cursor-pointer"
      >
        deepshetye
      </div>

      <ul className="flex items-center">
        <li
          className="px-4 cursor-pointer md:block hidden"
          onClick={() => router.push('/')}
        >
          Home
        </li>

        <li
          className="px-4 cursor-pointer md:block hidden"
          onClick={() => router.push('/about')}
        >
          About
        </li>

        <li
          className="px-4 cursor-pointer md:block hidden"
          onClick={() => router.push('/work')}
        >
          Works
        </li>

        <li>
          <a
            className="hidden md:block bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md mr-5 ml-2"
            href="https://docs.google.com/document/d/1r3kL8_YqUM-9rULN_WJwAbtd1OfD7grTZjWYX4TNLs8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>

        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode((prev) => !prev)}
            className=" cursor-pointer text-2xl"
          />
        </li>

        <li>
          <AiOutlineMenu
            // onClick={() => setDarkMode((prev) => !prev)}
            className="ml-4 cursor-pointer text-2xl md:hidden block"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
