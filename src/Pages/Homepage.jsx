import React from "react";
import Navbar from "../components/Homepage/Navbar";
import { Hero } from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Services from "../components/Homepage/Services";
import Blog from "../components/Homepage/Blog";
import Team from "../components/Homepage/Team";
import Portfolio from "../components/Homepage/Portfolio";
import Pricing from "../components/Homepage/Pricing";
import Contact from "../components/Homepage/Contact";
import Footer from "../components/Homepage/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <About />
      <Services />
      <Blog />
      <Team />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
