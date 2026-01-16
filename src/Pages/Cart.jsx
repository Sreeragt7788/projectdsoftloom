import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItems/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addItem, minusItem, removeItem, total, buyNow } = useContext(CartContext);
  const navigate = useNavigate();

  function handlePlaceOrder() {
    const result = buyNow();
    if (!result.success) return alert(result.message);
    navigate("/orderSuccess");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Mobile First */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-sm text-gray-600">{cart.length} Items</p>
              </div>
            </div>
            
            {cart.length > 0 && (
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</div>
              </div>
            )}
          </div>
        </div>

        {/* Empty State */}
        {cart.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center border border-gray-200 max-w-md mx-auto">
            <div className="w-20 h-20 bg-gray-100 rounded-xl mx-auto flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M7 13l-1.5 7.5M17 13l1.5 7.5M20 3h-3.25M6.75 3H3" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add items to get started</p>
            <button 
              onClick={() => navigate('/')}
              className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* Cart Content - Mobile Stacked */}
        {cart.length > 0 && (
          <div className="space-y-6">
            
            {/* Items List */}
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Cart Items ({cart.length})</h3>
                
                <div className="space-y-4">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      add={() => addItem(item.id)}
                      minus={() => minusItem(item.id)}
                      remove={() => removeItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary - Full Width Mobile */}
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-semibold text-green-600">₹{(total * 0.18).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-3"></div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 py-2">
                    <span>Total</span>
                    <span>₹{(total * 1.18).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Payment Icons - Mobile Wrapped */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs font-semibold text-gray-700 mb-2">We Accept:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <div className="px-2 py-2 bg-white rounded-lg shadow-sm border text-xs text-gray-700">💳 Cards</div>
                    <div className="px-2 py-2 bg-white rounded-lg shadow-sm border text-xs text-gray-700">💳 UPI</div>
                    <div className="px-2 py-2 bg-white rounded-lg shadow-sm border text-xs text-gray-700">📱 Wallet</div>
                    <div className="px-2 py-2 bg-white rounded-lg shadow-sm border text-xs text-gray-700">💰 COD</div>
                  </div>
                </div>

                {/* Place Order Button */}
                {/* Place Order Button - CENTERED */}
    <div className="flex justify-center mb-4">
      <button
        onClick={handlePlaceOrder}
        className="bg-gray-900 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-md hover:shadow-lg max-w-sm"
      >
        Place Order - ₹{Number((total * 1.18).toFixed(2)).toLocaleString('en-IN')}
      </button>
    </div>

                <div className="text-center text-xs text-gray-500 space-y-1">
                  <div>🔒 Secure Checkout</div>
                  <div>⚡ Instant Confirmation</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
