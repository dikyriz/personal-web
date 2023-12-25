import { useState } from "react";
// import './App.css'
import Header from "./parts/Header";
import Hero from "./parts/Hero";
import About from "./parts/About";
import Product from "./parts/Product";
import Testimoni from "./parts/Testimoni";
import Articles from "./parts/Articles";
import Opportunity from "./parts/Opportunity";
import Footer from "./parts/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Product />
      <Testimoni />
      <Articles />
      <Opportunity />
      <Footer />
    </>
  );
}

export default App;
