import React from "react";

function CartItem({ item, remove, add, minus }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row gap-4">
      
      {/* Image */}
      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/150?text=No+Image";
          }}
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500">{item.brand}</p>
        </div>

        {/* Mobile price */}
        <div className="sm:hidden mt-2 text-base font-bold text-green-600">
          ₹ {item.price * item.quantity}
        </div>
      </div>

      {/* ===== IMPROVED BOTTOM SECTION ===== */}
      <div className="flex sm:flex-col sm:items-end justify-between gap-4">

        {/* Quantity Control – better touch & spacing */}
        <div className="flex items-center gap-4 bg-gray-50 border rounded-xl px-4 py-2">
          <button
            onClick={minus}
            className="w-8 h-8 flex items-center justify-center rounded-full border bg-white text-lg font-bold hover:bg-gray-100"
          >
            −
          </button>

          <span className="min-w-6 text-center font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={add}
            className="w-8 h-8 flex items-center justify-center rounded-full border bg-white text-lg font-bold hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Price – desktop */}
        <div className="hidden sm:block text-right">
          <p className="text-xs text-gray-500">Item Total</p>
          <p className="text-lg font-bold text-green-600">
            ₹ {item.price * item.quantity}
          </p>
        </div>

        {/* Remove Button */}
        <button
          onClick={remove}
          className="text-red-500 text-sm font-medium hover:underline self-start sm:self-end"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
