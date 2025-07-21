import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import HomeService from './components/HomeService';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Brands />
      <HomeService />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

