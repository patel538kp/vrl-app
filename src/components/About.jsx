import React from "react";

export default function About() {
  return (
    <section id="about" className="py-14 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold">Built for reliability, scaled for growth</h2>
        <p className="mt-4 text-slate-600">
          Since 2012, Vidhi Logistics has connected businesses to customers through efficient, transparent, and sustainable logistics.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1541976076758-347942db1971?q=80&w=1600&auto=format&fit=crop"
        alt="Warehouse operations"
        className="rounded-3xl shadow-xl"
      />
    </section>
  );
}
