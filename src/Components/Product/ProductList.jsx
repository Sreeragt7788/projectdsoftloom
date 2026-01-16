import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { SearchContext } from "../../Context/SearchContext";
import NewProducts from "../../Data/NewProducts";

function ProductList() {
  const { search } = useContext(SearchContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/products`
        );

        const productsMerging = [
          ...response.data.products,
          ...NewProducts,
        ];

        const mergeResponse = {
          products: productsMerging,
          total: productsMerging.length,
          skip: 0,
          limit: productsMerging.length,
        };

        localStorage.setItem(
          "products",
          JSON.stringify(mergeResponse)
        );

        setProducts(mergeResponse.products);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* FILTERING PRODUCTS */
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  /*  UI STATES  */

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No products found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-6">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
