import React from 'react';

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
        </div>
      </div>
    </section>
  );
};

export default MyClients;
