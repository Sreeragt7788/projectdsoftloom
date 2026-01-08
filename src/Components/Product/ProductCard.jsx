import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


function ProductCard({ product }) {

  const {addToCart}=useContext(CartContext)

  const navigate = useNavigate();

  return (
    <div className="w-62.5 bg-white border rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>

        <p className="font-bold text-green-600 text-lg mt-2">
          ₹ {product.price}
        </p>

        
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-1 text-sm py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            View
          </button>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 text-sm py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
