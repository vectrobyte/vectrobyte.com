import React from 'react';

type MyProjectsProps = React.HTMLAttributes<HTMLElement>;

const MyProjects: React.FC<MyProjectsProps> = () => {
  return (
    <section
      id="my-projects"
      className="relative dark:bg-primary w-full h-full py-16 lg:py-32 transition-colors"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl text-gray-800 dark:text-white transition-colors md:mb-6">
            My Projects
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
