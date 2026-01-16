import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="text-center mb-16">
          <div className="mx-auto h-20 w-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-8">
            <svg className="h-12 w-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reach us anytime for ShopEasy support
          </p>
        </div>

       
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8">


            
            {/* Phone */}
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
              <a href="tel:+918547001234" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors block">
                +91 85470 01234
              </a>
              <p className="text-sm text-slate-500 mt-1">9 AM - 9 PM IST</p>
            </div>
            

            {/* Email */}
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
              <a href="mailto:hello@shopeasy.in" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors block">
                hello@shopeasy.in
              </a>
              <p className="text-sm text-slate-500 mt-1">Reply within 2 hrs</p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="h-10 w-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">WhatsApp</h3>
              <a href="https://wa.me/918547001234" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors block">
                +91 85470 01234
              </a>
              <p className="text-sm text-slate-500 mt-1">Instant replies</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Contact;
