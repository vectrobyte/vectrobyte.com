import React from 'react';

import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Layout from '../layouts';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
    </Layout>
  );
};

export default IndexPage;
