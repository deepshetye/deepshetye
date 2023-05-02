import React from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="py-8 flex flex-col items-center justify-center">
      <div className="flex gap-8 text-gray-600 dark:text-gray-400">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          Home
        </div>
        <div className="cursor-pointer" onClick={() => router.push('/about')}>
          About
        </div>
        <div className="cursor-pointer" onClick={() => router.push('/work')}>
          Work
        </div>
        <a
          className="cursor-pointer"
          href="https://docs.google.com/document/d/1r3kL8_YqUM-9rULN_WJwAbtd1OfD7grTZjWYX4TNLs8/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      <div
        className="pt-3 font-medium dark:text-white cursor-pointer"
        onClick={() => router.push('/')}
      >
        © Deep Shetye
      </div>
    </footer>
  );
};

export default Footer;
