import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">ARCHT Protocol</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Sovereign-grade infrastructure for tokenized real-world assets, 
              bridging physical assets with instant digital liquidity and ESG traceability.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/dashboard" className="text-base text-gray-400 hover:text-white">ARCHT SCAN</Link></li>
              <li><Link to="/assets" className="text-base text-gray-400 hover:text-white">Asset Explorer</Link></li>
              <li><Link to="/trading" className="text-base text-gray-400 hover:text-white">Trading</Link></li>
              <li><Link to="/compliance" className="text-base text-gray-400 hover:text-white">Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/technology" className="text-base text-gray-400 hover:text-white">Technology</Link></li>
              <li><Link to="/developers" className="text-base text-gray-400 hover:text-white">Developers</Link></li>
              <li><Link to="/insights" className="text-base text-gray-400 hover:text-white">Insights</Link></li>
              <li><Link to="/about" className="text-base text-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ARCHT Protocol. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
