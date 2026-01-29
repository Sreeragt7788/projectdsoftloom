import React from "react";
import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();

  const handleToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="mx-auto h-20 w-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-8">
            <svg
              className="h-12 w-12 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Support Center
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get help with your ShopEasy account, orders, payments or anything
            else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-indigo-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Live Chat
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Chat with our support team instantly. Available 24/7.
              </p>
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Chat Now
              </button>
            </div>
          </div>

          <div className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg
                  className="h-8 w-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Email Us
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Send us an email and get response within 2 hours.
              </p>
              <a
                href="mailto:support@shopeasy.in"
                className="w-full block bg-emerald-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center transform hover:-translate-y-1"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">FAQ</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Find answers to common questions instantly.
              </p>
              <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View FAQ
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Still need help?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            Our team is here for you 24/7. Reach out anytime.
          </p>
          <button
            onClick={handleToContact}
            className="bg-black text-white px-12 py-5 rounded-3xl font-bold text-lg hover:bg-gray-800 hover:shadow-2xl  transition-all duration-300 shadow-xl"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
