import React from 'react';

import me from '../asstes/me-vector.png';
import HeroBackground from './svgs/HeroBackground';

const Hero = () => {
  return (
    <section
      aria-label="hero"
      className="relative bg-gray-100 dark:bg-primary w-full h-full overflow-hidden transition-colors"
    >
      <div className="container mx-auto flex items-end justify-between">
        <div className="w-full sm:w-1/2 lg:w-3/5 px-4 sm:px-6 lg:px-8">
          <div className="py-32 lg:py-64">
            <div className="mr-[10px]">
              <h1 className="text-xl lg:text-3xl mb-2 lg:mb-6 text-gray-700 dark:text-gray-100 transition-colors">
                Namaste!
              </h1>
              <h1 className="text-4xl lg:text-6xl mb-4 text-gray-800 dark:text-white">
                I am Dilip Bhattarai
              </h1>
              <h5 className="lg:text-lg font-light uppercase mb-6 lg:mb-12 dark:text-gray-300  transition-colors">
                Full-Stack Web Developer
              </h5>
              <button className="bg-primary dark:bg-gray-100 text-white dark:text-primary rounded-full text-base py-3 px-5 transition-colors">
                Let&apos;s Chat
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex w-full lg:w-2/5 relative z-10 items-end">
          <img src={me} alt="" />
        </div>

        <HeroBackground className="absolute w-1/3 -top-[80%] sm:top-[-50%] lg:top-[-25%] right-[-10%] lg:right-[0] text-primary dark:text-gray-100 transition-all" />
      </div>
    </section>
  );
};

export default Hero;
