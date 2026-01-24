import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Checkout() {
  const { cart, total } = useContext(CartContext);
  const navigate = useNavigate();
  const nameref = useRef(null);

  const [address, setAddress] = useState({
    name: "", contact: "", house: "", street: "", city: "", state: "", pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userAddress", JSON.stringify(address));
    navigate("/paymentpage");
  };

  useEffect(() => {
    nameref.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* LEFT SIDE: Delivery Address Form */}
        <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Delivery Address</h2>
            <p className="text-gray-600">Enter your shipping details</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              ref={nameref}
              type="text" name="name" value={address.name} onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
            <input
              type="tel" name="contact" value={address.contact} onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
            <input
              type="text" name="house" value={address.house} onChange={handleChange}
              placeholder="House Name / Flat No."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
            <input
              type="text" name="street" value={address.street} onChange={handleChange}
              placeholder="Street / Locality"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text" name="city" value={address.city} onChange={handleChange}
                placeholder="City"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
              <input
                type="text" name="state" value={address.state} onChange={handleChange}
                placeholder="State"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                required
              />
            </div>
            <input
              type="number" name="pinCode" value={address.pinCode} onChange={handleChange}
              placeholder="PIN Code"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:bg-blue-800 shadow-lg transition-all"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* Right side  Order Summary Section*/}
        <div className="bg-white shadow-xl rounded-3xl p-8 lg:sticky lg:top-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-blue-100 p-2 rounded-lg">📦</span> Order Summary
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-3">
              <thead>
                <tr className="text-gray-400 text-[11px] ">
                  <th className="px-4 py-2 font-bold">PRODUCT</th>
                  <th className="px-4 py-2 font-bold text-center">QUANTITY</th>
                  <th className="px-4 py-2 font-bold text-right">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((items) => (
                  <tr key={items.id} className="bg-gray-50 rounded-2xl">
                    <td className="px-4 py-4 rounded-l-2xl">
                      <span className="font-semibold text-gray-800 block max-w-32 truncate">
                        {items.title}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                        {items.quantity}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right rounded-r-2xl font-bold text-gray-900">
                      ₹{items.price * items.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="px-4 pt-6">
                    <div className="flex justify-between items-center border-t-2 border-dashed border-gray-100 pt-6">
                      <span className="text-gray-500 font-medium text-lg">Grand Total</span>
                      <span className="text-2xl font-black text-blue-700 tracking-tighter">
                        ₹{total}
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;