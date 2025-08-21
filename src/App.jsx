import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900 scroll-smooth">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
