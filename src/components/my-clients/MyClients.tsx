import React from 'react';

import cixware from './assets/cixware.jpg';
import kindship from './assets/kindship.jpeg';
import steer from './assets/steer.svg';
import ytech from './assets/ytech.jpeg';

type MyClientsProps = React.HTMLAttributes<HTMLElement>;

const MyClients: React.FC<MyClientsProps> = () => {
  return (
    <section id="my-clients" className="w-full h-full py-16 lg:py-32 transition-colors">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl text-gray-800 dark:text-white transition-colors md:mb-6">
            My Work
          </h1>
          <p className="font-light text-xl lg:text-2xl mb-20 dark:text-gray-300">
            I&apos;m proud to have collaborated with some awesome clients:
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
            <div className="flex-center">
              <img src={steer} alt="" className="h-20" />
            </div>
            <div className="flex-center">
              <img src={kindship} alt="" className="h-20" />
            </div>
            <div className="flex-center">
              <img src={cixware} alt="" className="h-20" />
            </div>
            <div className="flex-center">
              <img src={ytech} alt="" className="h-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyClients;
