import React from 'react';

import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Hero from '../components/Hero';
import Layout from '../layouts';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <ContactMe />
    </Layout>
  );
};

export default IndexPage;
