import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#064e3b] text-white py-6 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name - Reduced Size */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">KeenKeeper</h2>
        
        {/* Tagline - Smaller text and less margin */}
        <p className="max-w-xl text-xs md:text-sm text-gray-200 mb-4 leading-snug">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section - Compact */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Social Links</p>
          <div className="flex gap-3 justify-center">
            {/* Instagram */}
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
              <FaInstagram size={16} />
            </a>
            {/* Facebook */}
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
              <FaFacebookF size={14} />
            </a>
            {/* X (Twitter) */}
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>

      
        <div className="w-full pt-4 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] md:text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;