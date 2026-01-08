import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About ShopEasy</h1>
          <p className="text-lg text-blue-100">
            Making online shopping simple, affordable, and reliable.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ShopEasy is a modern e-commerce platform built to provide customers
            with high-quality products at the best prices. We believe shopping
            should be simple, fast, and enjoyable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From electronics to daily essentials, our goal is to bring
            everything you need to one trusted platform.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              Quality products from trusted brands
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              Affordable pricing & great offers
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              Fast & secure delivery
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              Friendly customer support
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-600">Secure Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
