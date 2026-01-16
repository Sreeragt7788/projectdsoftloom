import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="w-72 bg-white border border-gray-500 rounded-3xl transition-all duration-300 group overflow-hidden flex flex-col">
      
      {/* Image Area */}
      <div className="h-44 bg-gray-50 flex items-center justify-center relative">
        <span className="absolute top-4 left-4 bg-red-500 text-white text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-widest z-10">
          {product.discountPercentage}% OFF
        </span>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-36 object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Info Area */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest leading-none">{product.brand}</p>
          <div className="text-[10px] font-bold text-yellow-500">★ {product.rating}</div>
        </div>
        
        <h3 className="font-bold text-gray-900 text-md truncate mb-2">{product.title}</h3>
        
        <div className="mb-6">
          <p className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
          <p className={`text-[9px] font-bold mt-1 uppercase tracking-tighter ${product.stock < 10 ? 'text-orange-500' : 'text-green-600'}`}>
            {product.stock < 10 ? 'Limited Stock' : product.availabilityStatus}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-1 text-[10px] font-bold py-3 bg-emerald-700 border border-gray-100 rounded-xl transition uppercase tracking-widest text-white"
          >
            Details
          </button>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 text-[10px] font-bold py-3 bg-orange-600 text-white rounded-xl transition uppercase tracking-widest shadow-lg shadow-blue-50"
          >
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;