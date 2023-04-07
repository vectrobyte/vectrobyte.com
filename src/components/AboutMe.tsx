import React from 'react';

import RoundAvatar from './RoundAvatar';

type AboutMeProps = React.HTMLAttributes<HTMLElement>;

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <section aria-label="about-me" className="py-32">
      <div className="container mx-auto flex items-center flex-wrap">
        <div className="hidden lg:block transition-colors w-[350px] px-4 sm:px-6 lg:px-8">
          <RoundAvatar className="" />
        </div>

        <div className="w-full lg:w-[calc(100%-365px)] px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white transition-colors lg:mb-6">
              About Me
            </h1>

            <RoundAvatar className="block lg:hidden mx-auto w-[250px] sm:w-[300px] my-10" />
          </div>

          <div className="text-gray-600 text-xs lg:text-sm dark:text-gray-300 transition-colors flex flex-col gap-3">
            <p>
              Hi, I&apos;m Dilip Bhattarai, Full-Stack Engineer from Nepal with a passion for
              building robust and scalable solutions using modern technologies.
            </p>

            <p>
              With over six years of experience in the industry, I have worked for companies and
              projects worldwide. My journey began as an on-site Software Engineer in Nepal, where I
              worked with various local companies for two years. However, I always had an insatiable
              appetite for learning and pushing the boundaries of what&apos;s possible. Thus, I
              transitioned into working remotely with overseas clients, which exposed me to a
              diverse range of technical requirements and challenges.
            </p>

            <p>
              I have a strong specialization in the latest ES standards of JavaScript and I
              particularly enjoy working with TypeScript. I am a front-end focused developer who
              loves to work with React.js and Vue.js for UI/UX projects, React Native for mobile
              development, as well as Pure HTML/CSS. My skill set also extends to the backend with
              technologies like Node.js and Laravel PHP, and databases such as Firestore, MySQL,
              PostgreSQL and everything that lies in between.
            </p>

            <p>
              If you&nbsp;re looking for a Full-Stack Engineer with a wealth of experience, a
              passion for innovation, and a dedication to excellence, let&apos;s work together to
              create something amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
