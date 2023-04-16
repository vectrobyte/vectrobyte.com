import React from 'react';

import Anchor from '../base/Anchor';
import cixware from './assets/cixware.png';
import kindship from './assets/kindship.png';
import steer from './assets/steer.svg';
import ytech from './assets/ytech.png';

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

          <div className="mx-4 lg:mx-40">
            <div className="flex items-center justify-around gap-10 lg:gap-20">
              <div className="flex-center flex-shrink-0">
                <Anchor href="https://steer.education" target="_blank" rel="noreferrer noopener">
                  <img
                    src={steer}
                    alt=""
                    className="h-10 lg:h-20 grayscale transition-all hover:grayscale-0 duration-1000"
                  />
                </Anchor>
              </div>
              <div className="flex-center flex-shrink-0">
                <Anchor href="https://kindship.com.au" target="_blank" rel="noreferrer noopener">
                  <img
                    src={kindship}
                    alt=""
                    className="h-12 lg:h-24 rounded-full grayscale transition-all hover:grayscale-0 duration-1000"
                  />
                </Anchor>
              </div>
              <div className="flex-center flex-shrink-0">
                <Anchor href="https://cixware.com" target="_blank" rel="noreferrer noopener">
                  <img
                    src={cixware}
                    alt=""
                    className="h-12 lg:h-24 rounded-full grayscale transition-all hover:grayscale-0 duration-1000"
                  />
                </Anchor>
              </div>
              <div className="flex-center flex-shrink-0">
                <Anchor href="https://ytech.com.np" target="_blank" rel="noreferrer noopener">
                  <img
                    src={ytech}
                    alt=""
                    className="h-12 lg:h-24 grayscale transition-all hover:grayscale-0 duration-1000"
                  />
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyClients;
