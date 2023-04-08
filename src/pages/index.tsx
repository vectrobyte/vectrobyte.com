import React from 'react';

import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Hero from '../components/Hero';
import Layout from '../layouts';
import { ThemeProvider } from '../providers/ThemeProvider';

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <AboutMe />
        <ContactMe />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
