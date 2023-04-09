import React from 'react';

import me from '../asstes/me-vector.png';
import Anchor from './base/Anchor';
import Button from './base/Button';
import HeroBackground from './svgs/HeroBackground';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-100 dark:bg-primary w-full h-full overflow-hidden transition-colors"
    >
      <div className="container mx-auto flex items-end justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-3/5 px-4 sm:px-6 lg:px-8">
          <div className="py-32 lg:py-64">
            <div className="mr-[10px]">
              <h1 className="text-xl lg:text-3xl mb-2 lg:mb-6 text-gray-700 dark:text-gray-100 transition-colors">
                Namaste!
              </h1>
              <h1 className="text-4xl lg:text-6xl mb-4 text-gray-800 dark:text-white">
                I am Dilip Bhattarai
              </h1>
              <h5 className="lg:text-lg font-light uppercase mb-6 lg:mb-12 dark:text-gray-300 transition-colors">
                Full-Stack Engineer
              </h5>
              <Anchor href="#contact-me">
                <Button>Hire Me</Button>
              </Anchor>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex w-full lg:w-1/2 xl:w-2/5 relative z-10 items-end">
          <img src={me} alt="" />
        </div>

        <HeroBackground className="absolute w-1/3 -top-[80%] sm:top-[-50%] lg:top-[-25%] right-[-10%] lg:right-[0] text-primary dark:text-gray-100 transition-all" />
      </div>
    </section>
  );
};

export default Hero;
