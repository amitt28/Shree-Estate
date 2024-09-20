import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/home-page-sections/hero-section/hero";
import Properties from "../../components/home-page-sections/properties-section/properties";
import Services from "../../components/home-page-sections/our-services-section/services";
import Team from "../../components/home-page-sections/our-team/team";
import Blog from "../../components/home-page-sections/blogs-section/blogs";
import Reviews from "../../components/home-page-sections/reviews-section/reviews";

function Home() {
  return (
    <>
      <Header />

      <Hero />
      
      <Properties />

      <Services />

      <Team />

      <Blog />

      <Reviews />

      <Footer />
      
    </>
  );
}

export default Home;
