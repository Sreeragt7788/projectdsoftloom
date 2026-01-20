import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItems/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addItem, minusItem, removeItem, total, buyNow } =
    useContext(CartContext);
  const navigate = useNavigate();

  function handlePlaceOrder() {
    const result = buyNow();
    if (!result.success) return alert(result.message);
    navigate("/orderSuccess");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Shopping Cart
                </h1>
                <p className="text-sm text-gray-600">{cart.length} Items</p>
              </div>
            </div>

            {cart.length > 0 && (
              <div className="text-xl font-bold text-gray-900">
                ${total.toLocaleString("en-IN")}
              </div>
            )}
          </div>
        </div>

        {/* Empty */}
        {cart.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center border border-gray-200">
            <h2 className="text-xl font-bold">Your Cart is Empty</h2>
          </div>
        )}

        {/* Cart Items */}
        {cart.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                add={() => addItem(item.id)}
                minus={() => minusItem(item.id)}
                remove={() => removeItem(item.id)}
              />
            ))}

            <div className="flex justify-center mt-6">
              <button
                onClick={handlePlaceOrder}
                className="bg-linear-to-r from-black to-gray-800 
               text-white px-10 py-4 rounded-2xl 
               font-semibold text-lg shadow-lg 
               hover:scale-105 transition-all duration-300"
              >
                PLACE ORDER —{" "}
                <b className="text-green-400">
                  ${Number((total * 1.18).toFixed(2)).toLocaleString("en-IN")}
                </b>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
