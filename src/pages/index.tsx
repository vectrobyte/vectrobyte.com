import * as React from 'react';

// markup
const IndexPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-secondary">
      <section aria-label="hero" className="bg-light dark:bg-primary">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <div aria-label="navbar" className="py-10 flex items-center">
              <h1 className="text-4xl dark:text-white">
                <span className="font-semibold">Dilip</span>{' '}
                <span className="font-thin">Bhattarai</span>
              </h1>
            </div>

            <div className="py-52">
              <div className="">
                <h1 className="text-5xl mb-8 text-gray-700 dark:text-gray-400">Hi!</h1>
                <h1 className="text-6xl mb-4 text-gray-800 dark:text-white">
                  {' '}
                  I am Dilip Bhattarai
                </h1>
                <h5 className="text-lg font-thin uppercase mb-8 dark:text-muted">
                  Full-Stack Web Developer
                </h5>
                <button className="bg-primary dark:bg-light text-white dark:text-primary rounded-full text-base py-3 px-5">
                  Let&apos;s Chat
                </button>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
