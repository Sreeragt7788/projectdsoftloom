import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { addToCart, buyNow } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_URL}/products/${id}`
        );

        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading)
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>;

  if (error)
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;

  const handleBuyNow = () => {
    addToCart(product);
    const result = buyNow();
    alert(result.message);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-8">
        
        <div className="bg-gray-100 rounded-xl flex items-center justify-center p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-sm rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-4">{product.brand}</p>

          
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-gray-600 ml-2">{product.rating}</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-6">
            ₹ {product.price}
          </h2>

          
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5
          text-sm font-semibold text-gray-700
          bg-gray-100 border border-gray-300
          rounded-lg shadow-sm
          hover:bg-gray-200 hover:text-black
          transition duration-200"
      >
        ← Go Back
      </button>
    </div>
  );
}

export default ProductDetails;
