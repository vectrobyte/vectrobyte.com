import React from 'react';

import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ToastContainerWrapper from '../components/toasts/ToastContainer/ToastContainer';
import Layout from '../layouts';
import { ThemeProvider } from '../providers/ThemeProvider';

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <AboutMe />
        <ContactMe />
        <Footer />
      </Layout>

      <ToastContainerWrapper />
    </ThemeProvider>
  );
};

export default IndexPage;
