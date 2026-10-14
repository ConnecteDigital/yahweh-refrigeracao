import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Brands from '../components/Brands';
import HomeService from '../components/HomeService';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <About />
    <Brands />
    <HomeService />
    <Testimonials />
    <Blog />
    <Contact />
  </main>
);

export default HomePage;
