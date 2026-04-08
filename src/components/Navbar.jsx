import React from 'react';

function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">T</span>
      </div>
      <span className="font-semibold text-black text-[22px] tracking-tight">Tripscops</span>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      {/* Left: Logo */}
      <LogoPlaceholder />

      {/* Center: Menu */}
      <ul className="hidden md:flex items-center gap-9 text-gray-800 font-medium text-[15px]">
        <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
        <li><a href="#how-it-works" className="hover:text-black transition-colors">How it works</a></li>
        <li><a href="#reviews" className="hover:text-black transition-colors">Reviews</a></li>
        <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
      </ul>

      {/* Right: Actions */}
      <div className="flex items-center gap-8">
        <a href="#download" className="bg-[#0A0F1C] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-md hidden sm:inline-flex">
          Download App
        </a>
        <a href="#login" className="hidden md:block text-gray-800 font-semibold hover:text-black transition-colors">
          Login
        </a>
      </div>
    </nav>
  );
}
