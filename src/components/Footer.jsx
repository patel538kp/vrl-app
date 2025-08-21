import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-slate-600 items-center">
        <div>© {new Date().getFullYear()} Vidhi Roadlines. All rights reserved.</div>
        {/* <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#contact" className="hover:text-slate-900">Support</a>
        </div> */}
      </div>
    </footer>
  );
}
