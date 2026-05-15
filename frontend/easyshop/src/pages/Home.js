import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/categories");
  };

  return (
    <>
      <Navbar />

      {/* OPTIONAL: add signup button here */}
      

      <Hero onShopNow={handleShopNow} />

      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;