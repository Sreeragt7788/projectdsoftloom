import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  function handleToReturn() {
    navigate("/products");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center transform transition-all hover:scale-[1.02]">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-green-100 p-5 rounded-full shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-green-600 animate-bounce-short"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Order Placed!
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed px-2">
          Thank you for shopping. We've received your order and we'll send a
          confirmation email shortly.
        </p>

        <div className="space-y-4">
          <button
            onClick={handleToReturn}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition duration-300 shadow-lg shadow-green-200 active:scale-95 flex items-center justify-center gap-2 text-lg"
          >
            <span>Go to Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="w-full text-gray-500 hover:text-gray-800 font-semibold py-2 transition duration-200 text-sm"
          >
            View Order Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
