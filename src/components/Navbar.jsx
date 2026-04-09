import React from 'react';
import logo from '../assets/logo.webp';
import { useToast } from './ToastContext';

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Tripscops Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" draggable="false" />
      <span className="font-semibold text-black text-[22px] tracking-tight">tripscopes</span>
    </div>
  );
}

export default function Navbar() {
  const { showToast } = useToast();

  const handleDownloadClick = (e) => {
    e.preventDefault();
    showToast('We are launching soon!', 3000);
  };

  return (
    <nav className="w-full py-5 flex items-center justify-between">
      {/* Left: Logo */}
      <Logo />

      {/* Center: Menu */}
      <ul className="hidden md:flex items-center gap-9 text-gray-800 font-medium text-[15px]">
        <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
        <li><a href="#how-it-works" className="hover:text-black transition-colors">How it works</a></li>
        <li><a href="#reviews" className="hover:text-black transition-colors">Reviews</a></li>
        <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
      </ul>

      {/* Right: Actions */}
      <div className="flex items-center gap-8">
        <a 
          href="#download" 
          onClick={handleDownloadClick}
          className="bg-[#0A0F1C] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-md hidden sm:inline-flex"
        >
          Download App
        </a>
        <a href="#login" className="hidden md:block text-gray-800 font-semibold hover:text-black transition-colors">
          Login
        </a>
      </div>
    </nav>
  );
}
