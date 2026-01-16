import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, buyNow } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      const parsed = JSON.parse(saved);
      const foundProduct = parsed.products.find(
        (item) => item.id === Number(id)
      );
      setProduct(foundProduct || null);
    }
    setLoading(false);
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading product...
      </div>
    );

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Product not found
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
        
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-black mb-6"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-lg p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-sm text-indigo-600 font-semibold mb-1">
              {product.brand}
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                {product.rating} ★
              </span>
              <span className="text-sm text-gray-500">
                {product.stock} in stock
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-gray-500 line-through">
                ₹{(product.price * 1.2).toFixed(0)}
              </p>
              <p className="text-sm text-green-600 font-medium">
                {product.discountPercentage}% off
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  addToCart(product);
                  buyNow();
                }}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-500"
              >
                Buy Now
              </button>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
              <div>
                <p className="text-gray-500">Warranty</p>
                <p className="font-medium">{product.warrantyInformation}</p>
              </div>
              <div>
                <p className="text-gray-500">Shipping</p>
                <p className="font-medium">{product.shippingInformation}</p>
              </div>
              <div>
                <p className="text-gray-500">Return</p>
                <p className="font-medium">{product.returnPolicy}</p>
              </div>
              <div>
                <p className="text-gray-500">Weight</p>
                <p className="font-medium">{product.weight} g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
