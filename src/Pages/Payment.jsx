import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../Context/NotificationContext";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { setCart, total } = useContext(CartContext);
  const { showError } = useContext(NotificationContext);
  const navigate = useNavigate();

  const savedAddress = JSON.parse(localStorage.getItem("userAddress"));

  const handlePayment = () => {
    if (!paymentMethod) {
      showError("Please select a payment method!");
      return;
    }
    localStorage.setItem("paidThrough", paymentMethod);
    navigate("/orderSuccess");
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      {/* Main Grid Container */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Address Section */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-bold text-gray-800">Delivery to :</h3>
              {/* Ninte SVG ivide add cheythu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 460 512.333"
              >
                <path
                  fill="#37C1C3"
                  fill-rule="nonzero"
                  d="M31.391 195.586l76.394-29.462a217.5 217.5 0 005.76 19.753v51.065l-82.154-41.356zm82.154 95.182v174.087c0 .472.008.943.024 1.412l-87.528 44.141c-8.838 4.458-19.618.907-24.075-7.931a17.846 17.846 0 01-1.923-8.071L.002 234.503l109.403 55.085a11.415 11.415 0 004.14 1.18z"
                />
                <path
                  fill="#F3AF25"
                  fill-rule="nonzero"
                  d="M12.932 202.706l4.108-1.584 96.505 48.589V278.9L0 221.732v-1.775c0-8.174 5.46-15.073 12.932-17.251z"
                />
                <path
                  fill="#3A9AD9"
                  fill-rule="nonzero"
                  d="M274.673 323.074l.027 171.332c-.003 3.068.306 5.982.943 8.661a36.84 36.84 0 002.412 6.903l-128.116-27.701c-7.774-1.979-13.525-9.026-13.525-17.414V234.024a270.61 270.61 0 0019.101 27.206c10.007 12.587 21.332 24.606 33.884 35.802 11.869 10.59 25.212 20.683 39.967 30.076l-.034.052c6.394 4.101 13.563 5.902 20.64 5.67a36.183 36.183 0 0018.792-6.017 238.782 238.782 0 005.909-3.739z"
                />
                <path
                  fill="#34CE74"
                  fill-rule="nonzero"
                  d="M381.71 173.938l53.864-20.774c9.225-3.565 19.596 1.022 23.161 10.247a17.85 17.85 0 011.208 6.457H460v230.483l-151.824-103.6a260.158 260.158 0 0034.904-40.052c17.683-25.043 31.016-53.293 38.63-82.761zm61.746 274.323l-123.233 62.147c-8.837 4.458-19.617.907-24.075-7.931a17.845 17.845 0 01-1.922-8.071l-.024-147.988 149.254 101.843z"
                />
                <path
                  fill="#F3AF25"
                  fill-rule="nonzero"
                  d="M460 414.165v14.741c0 5.124-2.148 9.747-5.589 13.021L294.2 332.602l-.004-23.719a251.19 251.19 0 005.204-4.308L460 414.165z"
                />
                <path
                  fill="#EF4147"
                  d="M252.889 302.211c-2.22 1.617-5.233 1.839-7.707.253-26.672-16.967-49.094-37.359-66.695-59.496-24.294-30.477-39.612-64.285-44.845-96.825-5.328-33.015-.349-64.761 16.08-90.576 6.469-10.212 14.747-19.505 24.832-27.528C197.737 9.549 224.219-.187 250.574.003c25.403.19 50.457 9.673 72.118 29.431 7.612 6.914 14.018 14.843 19.251 23.437 17.665 29.082 21.471 66.188 13.701 103.802-12.122 58.897-51.032 114.141-102.755 145.538zm-7.326-243.505c31.334 0 56.705 25.404 56.705 56.674 0 31.334-25.403 56.706-56.705 56.706-31.334 0-56.674-25.372-56.674-56.706-.064-31.302 25.34-56.674 56.674-56.674z"
                />
              </svg>
            </div>

            {savedAddress ? (
              <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
                <p className="font-bold text-gray-900 text-lg uppercase tracking-tight">
                  {savedAddress.name}
                </p>
                <div className="text-gray-600 leading-relaxed text-sm">
                  <p>
                    {savedAddress.house} , {savedAddress.street}
                  </p>
                  <p>
                    {savedAddress.city} , {savedAddress.state} -{" "}
                    <span className="font-bold">{savedAddress.pinCode}</span>
                  </p>
                </div>
                <p className="pt-2 text-gray-800 font-semibold">
                  📞 {savedAddress.contact}
                </p>
              </div>
            ) : (
              <p className="text-gray-400 italic py-10 text-center">
                No address found
              </p>
            )}
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 text-sm font-bold text-blue-600 hover:underline underline-offset-4"
          >
            Change Address
          </button>
        </div>

        {/* Right Side: Payment Selection */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-tighter italic">
              Select Payment Method
            </h3>

            <div className="space-y-4">
              {/* COD Option */}
              {/* COD */}
              <label
                className={`block p-5 rounded-2xl border-2 cursor-pointer transition-all 
${
  paymentMethod === "COD"
    ? "border-blue-600 bg-blue-50"
    : "border-gray-50 bg-gray-50 hover:border-gray-200"
}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span
                    className={`font-bold text-sm ${
                      paymentMethod === "COD"
                        ? "text-blue-700"
                        : "text-gray-600"
                    }`}
                  >
                    CASH ON DELIVERY (COD)
                  </span>
                </div>
              </label>

              {/* UPI */}
              <label
                className={`block p-5 rounded-2xl border-2 cursor-pointer transition-all 
${
  paymentMethod === "UPI"
    ? "border-blue-600 bg-blue-50"
    : "border-gray-100 hover:border-gray-200"
}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span
                    className={`font-bold text-sm ${
                      paymentMethod === "UPI"
                        ? "text-blue-700"
                        : "text-gray-600"
                    }`}
                  >
                    UPI
                  </span>
                </div>
              </label>

              {/* CARD */}
              <label
                className={`block p-5 rounded-2xl border-2 cursor-pointer transition-all 
${
  paymentMethod === "CARD"
    ? "border-blue-600 bg-blue-50"
    : "border-gray-100 hover:border-gray-200"
}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="payment"
                    value="CARD"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span
                    className={`font-bold text-sm ${
                      paymentMethod === "CARD"
                        ? "text-blue-700"
                        : "text-gray-600"
                    }`}
                  >
                    CREDIT CARD / DEBIT CARD
                  </span>
                </div>
              </label>

              {/* NET BANKING */}
              <label
                className={`block p-5 rounded-2xl border-2 cursor-pointer transition-all 
${
  paymentMethod === "NETBANKING"
    ? "border-blue-600 bg-blue-50"
    : "border-gray-100 hover:border-gray-200"
}`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="payment"
                    value="NETBANKING"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span
                    className={`font-bold text-sm ${
                      paymentMethod === "NETBANKING"
                        ? "text-blue-700"
                        : "text-gray-600"
                    }`}
                  >
                    NET BANKING
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-10">
            <button
              onClick={handlePayment}
              className="w-full bg-blue-700 text-white py-5 rounded-2xl font-black text-lg tracking-widest hover:bg-blue-800 shadow-xl shadow-blue-100 transition-all active:scale-95 uppercase"
            >
              Order Confirm (₹{total})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
