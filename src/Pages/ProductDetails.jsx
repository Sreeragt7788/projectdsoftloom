import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { LoginContext } from "../Context/LoginContext";
import { NotificationContext } from "../Context/NotificationContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { loggedInUser } = useContext(LoginContext);
  const { showSuccess } = useContext(NotificationContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [textReview, setTextReview] = useState({
    title: "",
    description: "",
  });
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  //  LOAD PRODUCT and REVIEWS
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      const foundProduct = parsed.products.find(
        (item) => item.id === Number(id)
      );
      setProduct(foundProduct || null);
    }

    const allReviews =
      JSON.parse(localStorage.getItem("productReviews")) || {};
    setReviews(allReviews[Number(id)] || []);

    setLoading(false);
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextReview((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleAddReview = () => {
    if (!textReview.title || !textReview.description || rating === 0) return;

    const newReview = {
      id: Date.now(),
      title: textReview.title,
      description: textReview.description,
      rating,
    };

    setReviews((prev) => {
      const updated = [newReview, ...prev];
      const allReviews =
        JSON.parse(localStorage.getItem("productReviews")) || {};
      allReviews[Number(id)] = updated;
      localStorage.setItem("productReviews", JSON.stringify(allReviews));
      return updated;
    });

    setTextReview({ title: "", description: "" });
    setRating(0);
    showSuccess("Review added successfully!");
  };

  
  const handleDeleteReview = (reviewId) => {
    setReviews((prev) => {
      const updated = prev.filter((r) => r.id !== reviewId);
      const allReviews =
        JSON.parse(localStorage.getItem("productReviews")) || {};
      allReviews[Number(id)] = updated;
      localStorage.setItem("productReviews", JSON.stringify(allReviews));
      return updated;
    });
  };

  
  const handleAddToCart = () => {
    if (!loggedInUser) navigate("/loginpage");
    else {
      addToCart(product);
      showSuccess("Product added to cart");
    }
  };

  const handleBuyNow = () => {
    if (!loggedInUser) navigate("/loginpage");
    else {
      addToCart(product);
      navigate("/cart");
    }
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Product not found
      </div>
    );

  const mrp = Math.round(
    product.price / (1 - product.discountPercentage / 100)
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 mb-6"
        >
          ← Back
        </button>

        {/* PRODUCT DETAILS */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* product Image section */}
          <div className="bg-gray-50 rounded-2xl p-8 flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          {/* DETAILS */}
          <div>
            <p className="text-sm uppercase tracking-widest text-indigo-600 font-bold mb-2">
              {product.brand}
            </p>

            <h1 className="text-3xl font-extrabold mb-3 text-gray-900">
              {product.title}
            </h1>

            {/* RATING + STOCK */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className={
                      s <= Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  ({product.rating})
                </span>
              </div>

              <span
                className={`text-sm font-semibold ${
                  product.stock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="mb-6">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-black">
                  ₹{product.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ₹{mrp}
                </span>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded font-bold">
                  {product.discountPercentage}% OFF
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* EXTRA INFO */}
            <div className="text-sm text-gray-500 space-y-1 mb-6">
              <p> {product.shippingInformation}</p>
              <p>{product.warrantyInformation}</p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 border py-3 rounded-xl font-semibold hover:bg-gray-100"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/*  REVIEWS */}
        <div className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold mb-4">Write a Review</h3>

              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    onClick={() => setRating(s)}
                    className={`cursor-pointer text-2xl ${
                      s <= rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <input
                name="title"
                value={textReview.title}
                onChange={handleChange}
                placeholder="Review title"
                className="w-full mb-3 p-3 border rounded-lg"
              />

              <textarea
                name="description"
                value={textReview.description}
                onChange={handleChange}
                placeholder="Your experience"
                className="w-full p-3 border rounded-lg h-28"
              />

              <button
                onClick={handleAddReview}
                className="mt-4 bg-black text-white w-full py-3 rounded-lg font-bold"
              >
                Submit Review
              </button>
            </div>

            {/* LIST */}
            <div>
              <h3 className="font-bold mb-4">
                Reviews ({reviews.length})
              </h3>

              {reviews.length === 0 ? (
                <p className="text-gray-400">
                  No reviews yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((r) => (
                    <div key={r.id} className="border p-4 rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <span
                                key={s}
                                className={
                                  s <= r.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <h4 className="font-bold">
                            {r.title}
                          </h4>
                        </div>

                        <button
                          onClick={() =>
                            handleDeleteReview(r.id)
                          }
                          className="text-xs text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>

                      <p className="text-gray-600 text-sm mt-2">
                        {r.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
