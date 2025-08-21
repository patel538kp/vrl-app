import React from "react";
import { Truck, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          {/* Replace the truck icon with an image logo */}
          {/* <div className="bg-blue-900 text-white p-2 rounded">
            <Truck className="w-5 h-5" />
          </div> */}
          <img src="src/assets/VRL_Black.png" alt="Vidhi Road Lines Logo" className="w-20 h-15" />
          <span className="font-bold text-lg">Vidhi Roadlines</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-blue-900">Home</a>
          <a href="#services" className="hover:text-blue-900">Services</a>
          <a href="#about" className="hover:text-blue-900">About</a>
          <a href="#contact" className="hover:text-blue-900">Contact</a>
        </nav>
        <a href="#contact" className="flex items-center gap-1 px-4 py-2 bg-blue-900 text-white rounded-2xl hover:opacity-90">
          Get Quote <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}
