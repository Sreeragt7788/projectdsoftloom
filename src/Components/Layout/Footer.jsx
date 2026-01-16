import React from "react";
import { Link } from "react-router-dom";
import { SiPaytm, SiPhonepe, SiGooglepay, SiRazorpay } from "react-icons/si";  // 👈 Your new imports

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ShopEasy</h2>
          <p className="text-sm text-gray-400">
            Your one-stop destination for quality products at the best prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
            <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
          </ul>
        </div>

        {/* SOCIAL & PAYMENTS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          
          {/* Social icons */}
          <div className="flex gap-5 text-gray-400 mb-6">
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Threads">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </a>
          </div>

          {/* PAYMENT ICONS */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">We Accept</h4>
            <div className="flex gap-4">  
              <SiGooglepay
                className="w-8 h-8 text-gray-400 hover:text-blue-500 transition-colors shrink-0"
                aria-label="Google Pay"
              />
              <SiPhonepe
                className="w-8 h-8 text-gray-400 hover:text-purple-500 transition-colors shrink-0"
                aria-label="PhonePe"
              />
              <SiPaytm
                className="w-8 h-8 text-gray-400 hover:text-white-500 transition-colors shrink-0"
                aria-label="Paytm"
              />
              <SiRazorpay
                className="w-8 h-8 text-gray-400 hover:text-sky-500 transition-colors shrink-0"
                aria-label="Razorpay"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400 max-w-7xl mx-auto px-6">
        © {new Date().getFullYear()} ShopEasy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
