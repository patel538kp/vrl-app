import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Reliable Logistics for a <span className="bg-yellow-200 px-2 rounded">Moving</span> India
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We deliver freight, not excuses. Pan‑India transportation, warehousing, and last‑mile solutions engineered for speed, safety, and savings.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="px-5 py-3 bg-blue-900 text-white rounded-2xl hover:opacity-90">Get Quote</a>
          <a href="#services" className="px-5 py-3 border rounded-2xl hover:bg-slate-100">Services</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop"
          alt="Fleet on highway"
          className="rounded-3xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
