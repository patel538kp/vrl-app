import React from "react";
import { Truck, Package, MapPin, Clock } from "lucide-react";

const features = [
  { icon: <Truck className="w-6 h-6"/>, title: "Road Freight", desc: "FTL & PTL across India with live tracking." },
  { icon: <Package className="w-6 h-6"/>, title: "Warehousing", desc: "Secure storage, inventory control." },
  { icon: <MapPin className="w-6 h-6"/>, title: "First & Last Mile", desc: "Door‑to‑door pickup & delivery." },
  { icon: <Clock className="w-6 h-6"/>, title: "On-Time Guarantee", desc: "Predictable ETAs with alerts." },
];

export default function Services() {
  return (
    <section id="services" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="p-6 bg-white shadow rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-10 h-10 mx-auto mb-4 text-blue-900">{f.icon}</div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
