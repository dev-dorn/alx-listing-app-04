// components/layout/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition">Partners</Link></li>
            </ul>
          </div>

          {/* Column 2: Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Bali</Link></li>
              <li><Link href="#" className="hover:text-white transition">Tuscany</Link></li>
              <li><Link href="#" className="hover:text-white transition">Serengeti</Link></li>
              <li><Link href="#" className="hover:text-white transition">New York</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} alx. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;