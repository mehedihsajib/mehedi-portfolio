import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import Services from '../../components/Services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ProjectCarousel />
    </>
  );
};

export default Home;
