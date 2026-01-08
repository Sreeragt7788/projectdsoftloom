import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./Components/Product/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import About from "./Pages/AboutUs";
import { CartProvider } from "./Context/CartContext";
import CartPage from "./Pages/Cart";
import OrderSuccess from "./Pages/OrderSuccess";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <BrowserRouter>
      
        <CartProvider>

          <NavBar />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registerForm" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orderSuccess" element={<OrderSuccess />} />
            <Route path="/loginForm" element={<Login />} />
          </Routes>

          <Footer />

        </CartProvider>
      
    </BrowserRouter>
  );
}

export default App;
