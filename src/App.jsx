import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import { SearchProvider } from "./Context/SearchContext";
import { LoginProvider } from "./Context/LoginContext";
import { RegisterProvider } from "./Context/RegisterContext";
import PrivateRoute from "./Routes/PrivateRoute";
import Support from "./Pages/Support";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <RegisterProvider>
        <LoginProvider>
          <SearchProvider>
            <CartProvider>
              <NavBar />

              <Routes>
                <Route path="/" element={<Navigate to= "/loginpage" />} />

                <Route path="/registerpage" element={<Register />} />
                
                <Route path="/products" element={<PrivateRoute> <ProductList /> </PrivateRoute>} />
                
                <Route path="/product/:id" element={<ProductDetails />} />
                
                <Route path="/about" element={<About />} />
                
                <Route path="/cart" element={<PrivateRoute> <CartPage /> </PrivateRoute> } />
                
                <Route path="/orderSuccess" element={<PrivateRoute> <OrderSuccess /> </PrivateRoute>} />

                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/loginpage" element={<Login />} />
              </Routes>

              <Footer />
            </CartProvider>
          </SearchProvider>
        </LoginProvider>
      </RegisterProvider>
    </BrowserRouter>
  );
}

export default App;
<PrivateRoute></PrivateRoute>