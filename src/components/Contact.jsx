import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2 text-slate-600">Send us a request and we’ll get back within 24 hours.</p>

        <form className="mt-8 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert("Submitted!");}}>
          <input name="name" placeholder="Full name" className="p-3 border rounded-2xl focus:ring-2 focus:ring-blue-400"/>
          <input name="company" placeholder="Company" className="p-3 border rounded-2xl focus:ring-2 focus:ring-blue-400"/>
          <input type="email" name="email" placeholder="Email" className="p-3 border rounded-2xl focus:ring-2 focus:ring-blue-400"/>
          <input type="tel" name="phone" placeholder="Phone" className="p-3 border rounded-2xl focus:ring-2 focus:ring-blue-400"/>
          <textarea name="message" rows={4} placeholder="Message" className="md:col-span-2 p-3 border rounded-2xl focus:ring-2 focus:ring-blue-400"/>
          <button type="submit" className="md:col-span-2 bg-blue-900 text-white py-3 rounded-2xl hover:opacity-90">Send Message</button>
        </form>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-sm">
          <div className="p-5 bg-white shadow rounded-2xl flex items-center gap-2"><Phone className="w-4 h-4"/> +91 98765 43210</div>
          <div className="p-5 bg-white shadow rounded-2xl flex items-center gap-2"><Mail className="w-4 h-4"/> sales@vidhilogistics.com</div>
          <div className="p-5 bg-white shadow rounded-2xl flex items-center gap-2"><MapPin className="w-4 h-4"/> Ahmedabad, Gujarat</div>
        </div>
      </div>
    </section>
  );
}
