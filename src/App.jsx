import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Docs from "./components/Docs";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (<>
      <Navbar />
      <Hero />
      <Overview />
      <Docs />
      <Footer />
    </>

  );
}